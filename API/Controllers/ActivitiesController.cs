using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

[Route("[controller]")]
public class ActivitiesController : BaseApiController
{
    private readonly ILogger<ActivitiesController> _logger;
    private readonly DataContext _context;

    public ActivitiesController(ILogger<ActivitiesController> logger, DataContext context)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities() 
    {
        return await _context.Activities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id) 
    {
        return await _context.Activities.FindAsync(id);
    }
}
