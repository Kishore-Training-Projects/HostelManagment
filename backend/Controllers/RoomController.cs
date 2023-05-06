using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HostelManagement.Data;
using HostelManagement.Model;

namespace HostelManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly HostelManagementContext _context;

        public RoomController(HostelManagementContext context)
        {
            _context = context;
        }

        // GET: api/Room
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoomModel>>> GetRoomModel()
        {
          if (_context.RoomModel == null)
          {
              return NotFound();
          }
            return await _context.RoomModel.ToListAsync();
        }

        // GET: api/Room/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RoomModel>> GetRoomModel(int id)
        {
          if (_context.RoomModel == null)
          {
              return NotFound();
          }
            var roomModel = await _context.RoomModel.FindAsync(id);

            if (roomModel == null)
            {
                return NotFound();
            }

            return roomModel;
        }



        // GET: api/Room/5
        [HttpGet("hosteller/{id}")]
        public async Task<ActionResult<RoomModel>> getroomofuser(int id)
        {
            if (_context.RoomModel == null)
            {
                return NotFound();
            }
            var hostel = await _context.HostellerModel.Include(x=>x.Room).Where(x=> x.HostellerId == id).FirstOrDefaultAsync();
            var roomModel = hostel.Room;


            if (roomModel == null)
            {
                return NotFound();
            }

            return roomModel;
        }




        // PUT: api/Room/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<RoomModel>> PutRoomModel(int id, RoomModel roomModel)
        {
            if (id != roomModel.RoomNo)
            {
                return BadRequest();
            }

            _context.Entry(roomModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return await _context.RoomModel.FindAsync(id);
        }

        // POST: api/Room
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RoomModel>> PostRoomModel(RoomModel roomModel)
        {
          if (_context.RoomModel == null)
          {
              return Problem("Entity set 'HostelManagementContext.RoomModel'  is null.");
          }
            _context.RoomModel.Add(roomModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoomModel", new { id = roomModel.RoomNo }, roomModel);
        }

        // DELETE: api/Room/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoomModel(int id)
        {
            if (_context.RoomModel == null)
            {
                return NotFound();
            }
            var roomModel = await _context.RoomModel.FindAsync(id);
            if (roomModel == null)
            {
                return NotFound();
            }

            _context.RoomModel.Remove(roomModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RoomModelExists(int id)
        {
            return (_context.RoomModel?.Any(e => e.RoomNo == id)).GetValueOrDefault();
        }
    }
}
