using System;
using System.Collections.Generic;
using System.Linq;


using System.Collections.Generic;

using System.Threading.Tasks;

using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;



namespace model;

public partial class Alocacao
{
    public byte Id { get; set; }

    public byte? Area { get; set; }

    public byte? Automovel { get; set; }

    public byte? ConcessionRia { get; set; }

    public byte? Quantidade { get; set; }


    public static Alocacao[] BuscarTodos(){
        using (var context = new AtividadeEdjalmaContext())
        {
            var alocacao = context.Alocacaos.ToArray();

            return alocacao;
        }
    }

    public static Alocacao[] BuscarPorId(int id){
        using (var context = new AtividadeEdjalmaContext())
        {
            var alocacao = context.Alocacaos.Where(a => a.Area == id).ToArray();

            return alocacao;
        }
    }
}
