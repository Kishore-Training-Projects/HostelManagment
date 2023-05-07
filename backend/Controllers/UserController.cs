using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HostelManagement.Data;
using HostelManagement.Model;
using Newtonsoft.Json;

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


        


        // api to get count od details

        // GET: api/User
        [HttpGet("count/")]
        public async Task<ActionResult<string>> getcount()
        {
            Dictionary<string, int> count = new Dictionary<string, int>();

            count["hosteller"] = _context.HostellerModel.Count();
            count["room"] = _context.RoomModel.Count();
            count["complaint"] = _context.ComplaintModel.Where(x=>x.status=="initiated").Count();
            count["user"] = _context.UserModel.Count();


            return JsonConvert.SerializeObject(count);
            
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


        // api to get admin login 

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
