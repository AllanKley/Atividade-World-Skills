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
public class concessionariaController : ControllerBase
{
  

    private readonly ILogger<concessionariaController> _logger;

    public concessionariaController(ILogger<concessionariaController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("buscar/{id}")]
    public Concessionaria BuscarPorId(int id)
    {
        var concessionaria = Concessionaria.BuscarPorId(id);

        return concessionaria;
    }
}
