using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using model;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class automovelController : ControllerBase
{
  

    private readonly ILogger<automovelController> _logger;

    public automovelController(ILogger<automovelController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("buscar/{id}")]
    public Automovei BuscarPorId(int id)
    {
        var automovel = Automovei.BuscarPorId(id);

        return automovel;
    }
}
