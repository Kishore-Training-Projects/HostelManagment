using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HostelManagement.Data;
using HostelManagement.Model;
using HostelManagement.Services;
using Microsoft.Extensions.Hosting;

namespace HostelManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class HostellerController : ControllerBase
    {
        private readonly HostelManagementContext _context;

        EmailSender email = new EmailSender();

        public HostellerController(HostelManagementContext context)
        {
            _context = context;
        }

        // api to get all hosteller including room

        // GET: api/Hosteller
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HostellerModel>>> GetHostellerModel()
        {
            if (_context.HostellerModel == null)
            {
                return NotFound();
            }
            return await _context.HostellerModel.Include(x => x.Room).ToListAsync();
        }


        // api get all roomate hosteller for user dashboard
        // GET: api/Hosteller/roommates
        [HttpGet("roommates/{id}")]
        public async Task<ActionResult<IEnumerable<HostellerModel>>> getHostellerroommates(int id)
        {

            if (_context.HostellerModel == null)
            {
                return NotFound();
            }

            try
            {

                var hostel = await _context.HostellerModel.Include(x => x.Room).Where(x => x.HostellerId == id).FirstOrDefaultAsync();
                return await _context.HostellerModel.Where(x => x.Room.RoomNo == hostel.Room.RoomNo).Include(x => x.Room).ToListAsync();
            }
            catch (Exception e)
            {
                return NotFound();
            }


        }




        //api to get all hosteller not assigned with room
        // GET: api/Hosteller
        [HttpGet("new/")]
        public async Task<ActionResult<IEnumerable<HostellerModel>>> GetHostellernew()
        {
            if (_context.HostellerModel == null)
            {
                return NotFound();
            }
            return await _context.HostellerModel.Where(x => x.Room == null).ToListAsync();
        }



        //api to get  hosteller individual by id

        [HttpGet("{id}")]
        public async Task<ActionResult<HostellerModel>> GetHostellerModel(int id)
        {
            if (_context.HostellerModel == null)
            {
                return NotFound();
            }
            var hostellerModel = await _context.HostellerModel.FindAsync(id);

            if (hostellerModel == null)
            {
                return NotFound();
            }

            return hostellerModel;
        }


        //api to get hosteller based on  roomNo

        [HttpGet("room/{id}")]
        public async Task<ActionResult<IEnumerable<HostellerModel>>> GetHostellerofroom(int id)
        {
            if (_context.HostellerModel == null)
            {
                return NotFound();
            }
            var hostellerModel = await _context.HostellerModel.Where(x => x.Room.RoomNo == id).ToListAsync();

            if (hostellerModel == null)
            {
                return NotFound();
            }

            return hostellerModel;
        }


        //api to get email address for sign in with google

        // POST: api/Hosteller/user/login
        [HttpGet("user/login")]
        public async Task<ActionResult<HostellerModel>> checkemailbyuser(string email)
        {


            if (_context.HostellerModel == null)
            {
                return Problem("Entity set 'HostelManagementContext.HostellerModel'  is null.");
            }
            HostellerModel hosteller = new HostellerModel();
            try
            {
                hosteller = await _context.HostellerModel.Where(x => x.Email == email).FirstOrDefaultAsync();

            }
            catch (Exception e)
            {
                return Problem(e.Message);

            }

            if (hosteller == null)
            {
                return Problem("User Doesnt Exsist");
            }


            return hosteller;
        }


        // api to addroom for hosteller for manager

        // POST: api/Hosteller
        [HttpPost("addroom/")]
        public async Task<ActionResult<HostellerModel>> PostHostellerModelss(int hosteller, int roomNo)
        {


            if (_context.HostellerModel == null)
            {
                return Problem("Entity set 'HostelManagementContext.HostellerModel'  is null.");
            }
            HostellerModel hos = await _context.HostellerModel.FindAsync(hosteller); // get hosteller details
            RoomModel room = await _context.RoomModel.FindAsync(roomNo); // get room model
            room.Occupied = room.Occupied + 1;  // updating room occupied
            hos.Room = room;

            try
            {



                _context.Entry(hos).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                return Problem("Unable to add room to hosteller");
            }
            try
            {

                string emailsubject = "Room Confirmation 🙏";
                String message = "Dear " + hos.Name + "\n\t"
                    + "Thank you for registering in our system . Your romm is confirm. \n"
                    + "Your room No : " + room.RoomNo;
                email.SendEmail(emailsubject, hos.Email, hos.Name, message).Wait();
            }
            catch (Exception e)
            {
                return Problem("unable to send mail");
            }

            return CreatedAtAction("GetHostellerModel", new { id = hosteller }, hos);
        }



        // api to remove roommates

        // PUT: api/Hosteller/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("roommates/remove/{id}")]
        public async Task<ActionResult<HostellerModel>> removeroomates(int id)
        {


            // get details of model and and update room details 

            var hostellerModel = await _context.HostellerModel.Include(x => x.Room).Where(x => x.HostellerId == id).FirstOrDefaultAsync();
            var Rooms = hostellerModel.Room;
            Rooms.Occupied = Rooms.Occupied - 1;
            hostellerModel.Room = null;



            try
            {

                _context.Entry(hostellerModel).State = EntityState.Modified;
                _context.Entry(Rooms).State = EntityState.Modified;

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HostellerModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            try
            {

                string emailsubject = "RommDetails Removed ❌";
                String message = "Dear " + hostellerModel.Name + "\n\t"
                    + "Thank you for registering in our system . Your romm is closed. \n"
                + "Your are removed from the room🎉";
                email.SendEmail(emailsubject, hostellerModel.Email, hostellerModel.Name, message).Wait();

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);

            }

            var hostel = await _context.HostellerModel.Include(x => x.Room).Where(x => x.HostellerId == id).FirstOrDefaultAsync();

            return hostel;
        }


        // api to update hosteller details
        // PUT: api/Hosteller/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<HostellerModel>> PutHostellerModel(int id, HostellerModel hostellerModel)
        {


            if (id != hostellerModel.HostellerId)
            {
                return BadRequest();
            }

            _context.Entry(hostellerModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HostellerModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            var hostel = await _context.HostellerModel.Where(x => x.HostellerId == hostellerModel.HostellerId).FirstOrDefaultAsync();

            return hostel;
        }

        // POST: api/Hosteller
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HostellerModel>> PostHostellerModel(HostellerModel hostellerModel)
        {
            if (_context.HostellerModel == null)
            {
                return Problem("Entity set 'HostelManagementContext.HostellerModel'  is null.");
            }

            _context.HostellerModel.Add(hostellerModel);
            await _context.SaveChangesAsync();




            try
            {

                string emailsubject = "Registeration Confirmation 🙏";
                String message = "Dear " + hostellerModel.Name + "\n\t"
                    + "Thank you for registering in our system . Please always support us.";

                email.SendEmail(emailsubject, hostellerModel.Email, hostellerModel.Name, message).Wait();

            }
            catch (Exception e)
            {
                return Problem("Error in sending mail");
            }

            return CreatedAtAction("GetHostellerModel", new { id = hostellerModel.HostellerId }, hostellerModel);
        }


        // DELETE: api/Hosteller/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHostellerModel(int id)
        {
            if (_context.HostellerModel == null)
            {
                return NotFound();
            }
            var hostellerModel = await _context.HostellerModel.FindAsync(id);
            if (hostellerModel == null)
            {
                return NotFound();
            }
            hostellerModel.Room = null;

            _context.HostellerModel.Remove(hostellerModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HostellerModelExists(int id)
        {
            return (_context.HostellerModel?.Any(e => e.HostellerId == id)).GetValueOrDefault();
        }
    }
}
