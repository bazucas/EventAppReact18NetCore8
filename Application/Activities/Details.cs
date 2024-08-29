using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;

namespace Application.Activities;

public class Details
{
    public class Query : IRequest<Activity>
    {

    }
}
