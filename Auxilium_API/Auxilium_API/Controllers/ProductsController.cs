using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Auxilium_API.Models;

namespace Auxilium_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AuxiliumContext _context;

        public ProductsController(AuxiliumContext context)
        {
            _context = context;
        }

        // GET: api/Products
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        //{
        //    return await _context.Products.ToListAsync();
        //}

        //GET: products by product type
        [HttpGet("type/{ProductType}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByType(string ProductType)
        {
            List<Product> productList = new List<Product>();
            var products = await _context.Products.ToListAsync();
            products.ForEach(element =>
            {
                if(element.ProductType == ProductType && element.ProductAvailability == 1)
                {
                    productList.Add(element);
                }

            });
            return productList;
        }

        [HttpGet("supplierId/{SupplierId}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsBySupplierId(int SupplierId)
        {
            List<Product> productList = new List<Product>();
            var products = await _context.Products.ToListAsync();
            products.ForEach(element =>
            {
                if (element.SupplierId == SupplierId)
                {
                    productList.Add(element);
                }

            });
            return productList;
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.ProductId }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.ProductId == id);
        }
    }
}
