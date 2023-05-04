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
    public class ComplaintController : ControllerBase
    {
        private readonly HostelManagementContext _context;

        public ComplaintController(HostelManagementContext context)
        {
            _context = context;
        }

        // GET: api/Complaint
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ComplaintModel>>> GetComplaintModel()
        {
          if (_context.ComplaintModel == null)
          {
              return NotFound();
          }
            return await _context.ComplaintModel.ToListAsync();
        }

        // GET: api/Complaint/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ComplaintModel>> GetComplaintModel(int id)
        {
          if (_context.ComplaintModel == null)
          {
              return NotFound();
          }
            var complaintModel = await _context.ComplaintModel.FindAsync(id);

            if (complaintModel == null)
            {
                return NotFound();
            }

            return complaintModel;
        }

        // PUT: api/Complaint/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComplaintModel(int id, ComplaintModel complaintModel)
        {
            if (id != complaintModel.ComplaintID)
            {
                return BadRequest();
            }

            _context.Entry(complaintModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComplaintModelExists(id))
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

        // POST: api/Complaint
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ComplaintModel>> PostComplaintModel(ComplaintModel complaintModel)
        {
          if (_context.ComplaintModel == null)
          {
              return Problem("Entity set 'HostelManagementContext.ComplaintModel'  is null.");
          }
            _context.ComplaintModel.Add(complaintModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComplaintModel", new { id = complaintModel.ComplaintID }, complaintModel);
        }

        // DELETE: api/Complaint/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComplaintModel(int id)
        {
            if (_context.ComplaintModel == null)
            {
                return NotFound();
            }
            var complaintModel = await _context.ComplaintModel.FindAsync(id);
            if (complaintModel == null)
            {
                return NotFound();
            }

            _context.ComplaintModel.Remove(complaintModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComplaintModelExists(int id)
        {
            return (_context.ComplaintModel?.Any(e => e.ComplaintID == id)).GetValueOrDefault();
        }
    }
}
