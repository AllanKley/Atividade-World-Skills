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
public class clienteController : ControllerBase
{
  

    private readonly ILogger<clienteController> _logger;

    public clienteController(ILogger<clienteController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("buscarTodos")]
    public Cliente[] BuscarTodos()
    {
        var clientes = Cliente.BuscarTodos();

        return clientes;
    }
}
