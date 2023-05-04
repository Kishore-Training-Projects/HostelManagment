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
    public class HostellerController : ControllerBase
    {
        private readonly HostelManagementContext _context;

        public HostellerController(HostelManagementContext context)
        {
            _context = context;
        }

        // GET: api/Hosteller
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HostellerModel>>> GetHostellerModel()
        {
          if (_context.HostellerModel == null)
          {
              return NotFound();
          }
            return await _context.HostellerModel.Include(x=>x.Room).ToListAsync();
        }

        
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



        [HttpGet("/hi/{id}")]
        public async Task<ActionResult<HostellerModel>> GetHostellerModelsss(int id)
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




        // POST: api/Hosteller
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("/addroom/")]
        public async Task<ActionResult<HostellerModel>> PostHostellerModelss(int value1 , int value2)
        {


            if (_context.HostellerModel == null)
            {
                return Problem("Entity set 'HostelManagementContext.HostellerModel'  is null.");
            }
            HostellerModel hos = await _context.HostellerModel.FindAsync(value1);
            RoomModel room = await _context.RoomModel.FindAsync(value2);
            hos.Room = room;
            _context.Entry(hos).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHostellerModel", new { id = value1 }, hos);
        }



        // PUT: api/Hosteller/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHostellerModel(int id, HostellerModel hostellerModel)
        {
            Console.WriteLine(hostellerModel.Room.RoomNo);

            if (hostellerModel.Room.RoomNo != null)
            {
                Console.WriteLine("in if");
                var room = await _context.RoomModel.Where(x => x.RoomNo == hostellerModel.Room.RoomNo).FirstOrDefaultAsync();
                hostellerModel.Room = room;
            }

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

            return NoContent();
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
