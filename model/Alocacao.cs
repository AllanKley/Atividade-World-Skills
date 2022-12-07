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

    public static Object[] BuscarPorId(int id){
        using (var context = new AtividadeEdjalmaContext())
        {
            var alocacao = context.Alocacaos
            .Where(a => a.Area == id)
            .GroupBy(a => a.Automovel)
            .Select(a => new {
                Automovel = a.Key
            })
            .ToArray();

            return alocacao;
        }
    }

    public static object[] BuscarConcessionarias(int areaId, int automovelId){
        using (var context = new AtividadeEdjalmaContext())
        {
            var alocacao = context.Alocacaos
            .Where(a => a.Area == areaId && a.Automovel == automovelId)
            .GroupBy(a => a.ConcessionRia)
            .Select(a => new {
                id = a.Key
            })
            .ToArray();

            

            return alocacao;
        }
    }

    public static void Vender(int areaId, int automovelId, int concessionariaId){
        using (var context = new AtividadeEdjalmaContext())
        {
            Alocacao alocacao = context.Alocacaos.FirstOrDefault(a => a.Area == areaId && a.Automovel == automovelId && a.ConcessionRia == concessionariaId);

            alocacao.Quantidade -= 1;

            context.SaveChanges();
        }
    }
}
