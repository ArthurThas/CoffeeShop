using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeShop.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeController : ControllerBase
    {
        [HttpGet("Top")]
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

        [HttpGet]
        public Task<List<string>> GetCoffees()
        {
            var coffees = new List<string>
            {
                "Americano",
                "Machiato",
                "Latte",
                "Mocha",
                "Brewed",
                "Matcha"
            };

            return Task.FromResult(coffees);
        }
    }
}
