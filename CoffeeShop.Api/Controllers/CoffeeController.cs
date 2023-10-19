using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeShop.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeController : ControllerBase
    {
        [HttpGet]
        public Task<List<string>> GetTopCoffees()
        {
            var coffees = new List<string>
            {
                "Americano",
                "Machiato",
                "Latte"
            };

            return Task.FromResult(coffees);
        }
    }
}
