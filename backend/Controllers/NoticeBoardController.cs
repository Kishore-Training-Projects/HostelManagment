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

namespace HostelManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoticeBoardController : ControllerBase
    {
        private readonly HostelManagementContext _context;
        EmailSender email = new EmailSender();

        public NoticeBoardController(HostelManagementContext context)
        {
            _context = context;
        }

        // GET: api/NoticeBoard
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NoticeBoardModel>>> GetNoticeBoardModel()
        {
          if (_context.NoticeBoardModel == null)
          {
              return NotFound();
          }
            return await _context.NoticeBoardModel.ToListAsync();
        }

        // GET: api/NoticeBoard/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NoticeBoardModel>> GetNoticeBoardModel(int id)
        {
          if (_context.NoticeBoardModel == null)
          {
              return NotFound();
          }
            var noticeBoardModel = await _context.NoticeBoardModel.FindAsync(id);

            if (noticeBoardModel == null)
            {
                return NotFound();
            }

            return noticeBoardModel;
        }

        // PUT: api/NoticeBoard/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNoticeBoardModel(int id, NoticeBoardModel noticeBoardModel)
        {
            if (id != noticeBoardModel.NoticeId)
            {
                return BadRequest();
            }

            _context.Entry(noticeBoardModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoticeBoardModelExists(id))
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

        // POST: api/NoticeBoard
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<NoticeBoardModel>> PostNoticeBoardModel(NoticeBoardModel noticeBoardModel)
        {
          if (_context.NoticeBoardModel == null)
          {
              return Problem("Entity set 'HostelManagementContext.NoticeBoardModel'  is null.");
          }
            _context.NoticeBoardModel.Add(noticeBoardModel);
            await _context.SaveChangesAsync();

            string emailsubject = "Important Notice 📌";
            String message = "Hi user\n\t"+noticeBoardModel.NoticeDetails;

            List<HostellerModel> hostel = await _context.HostellerModel.Include(x => x.Room).ToListAsync();

         email.sendGroupEmail(emailsubject, hostel, message);


            return CreatedAtAction("GetNoticeBoardModel", new { id = noticeBoardModel.NoticeId }, noticeBoardModel);
        }

        // DELETE: api/NoticeBoard/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNoticeBoardModel(int id)
        {
            if (_context.NoticeBoardModel == null)
            {
                return NotFound();
            }
            var noticeBoardModel = await _context.NoticeBoardModel.FindAsync(id);
            if (noticeBoardModel == null)
            {
                return NotFound();
            }

            _context.NoticeBoardModel.Remove(noticeBoardModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NoticeBoardModelExists(int id)
        {
            return (_context.NoticeBoardModel?.Any(e => e.NoticeId == id)).GetValueOrDefault();
        }
    }
}
