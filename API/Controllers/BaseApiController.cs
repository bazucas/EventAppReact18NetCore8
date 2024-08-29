using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BaseApiController : ControllerBase
{
    protected IMediator _mediator;

    // if _mediator instance exists, returns itself, if not, create a new instance
    // then stores it on _mediator, and after that, it will return as the Mediator function output
    // ??= null coalescing assignment stores it before it is returned
    // ?? null coalescing only returns without storing it in the _mediator field.

    protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
}
