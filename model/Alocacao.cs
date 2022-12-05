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

    public static Object BuscarPorId(int id){
        using (var context = new AtividadeEdjalmaContext())
        {
            var alocacao = context.Alocacaos
            .Join(context.Automoveis, a => a.Automovel, c => c.Id, (a,c) => new{
                area = a.Area,
                modelo = c.Modelo,
                preco = c.PreO,
                automovel_id = a.Id
            })
          ;

            return alocacao;
        }
    }
}
