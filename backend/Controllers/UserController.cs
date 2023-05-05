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
    public class UserController : ControllerBase
    {
        private readonly HostelManagementContext _context;

        public UserController(HostelManagementContext context)
        {
            _context = context;
        }

        // GET: api/User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUserModel()
        {
          if (_context.UserModel == null)
          {
              return NotFound();
          }
            return await _context.UserModel.ToListAsync();
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserModel>> GetUserModel(int id)
        {
          if (_context.UserModel == null)
          {
              return NotFound();
          }
            var userModel = await _context.UserModel.FindAsync(id);

            if (userModel == null)
            {
                return NotFound();
            }

            return userModel;
        }

        // PUT: api/User/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<UserModel>> PutUserModel(int id, UserModel userModel)
        {
            if (id != userModel.UserID)
            {
                return BadRequest();
            }

            _context.Entry(userModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }


            return await _context.UserModel.FindAsync(id);
        }



        // POST: api/login
        [HttpPost("login")]
        public async Task<ActionResult<UserModel>> getuserlogin(UserModel userModel)
        {
            if (_context.UserModel == null)
            {
                return Problem("Entity set 'HostelManagementContext.UserModel'  is null.");
            }

            var user = await _context.UserModel.Where(x => x.UserEmail == userModel.UserEmail).Where(x=> x.Password == userModel.Password).FirstOrDefaultAsync();

            if (user == null)
            {
                return Problem("User Doesnt Exist");
            }
            else
            {
                return user;
            }

            return user;
        }





        // POST: api/User
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserModel>> PostUserModel(UserModel userModel)
        {
          if (_context.UserModel == null)
          {
              return Problem("Entity set 'HostelManagementContext.UserModel'  is null.");
          }
            _context.UserModel.Add(userModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserModel", new { id = userModel.UserID }, userModel);
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserModel(int id)
        {
            if (_context.UserModel == null)
            {
                return NotFound();
            }
            var userModel = await _context.UserModel.FindAsync(id);
            if (userModel == null)
            {
                return NotFound();
            }

            _context.UserModel.Remove(userModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserModelExists(int id)
        {
            return (_context.UserModel?.Any(e => e.UserID == id)).GetValueOrDefault();
        }
    }
}
