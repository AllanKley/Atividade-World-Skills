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
public class locacaoController : ControllerBase
{
  

    private readonly ILogger<locacaoController> _logger;

    public locacaoController(ILogger<locacaoController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("all")]
    public Alocacao[] BuscarTodos()
    {
        Alocacao[] alocacao = Alocacao.BuscarTodos();

        return alocacao;
    }

    [HttpGet]
    [Route("buscar/{id}")]
    public Object[] BuscarPorId(int id)
    {
        var alocacao = Alocacao.BuscarPorId(id);

        return alocacao;
    }
}
