using System;
using System.Collections.Generic;

namespace model;

public partial class Concessionaria
{
    public byte Column1 { get; set; }

    public string? Column2 { get; set; }


    public static Concessionaria BuscarPorId(int id){
        using (var context = new AtividadeEdjalmaContext())
        {
            var concessionaria = context.Concessionarias
            .FirstOrDefault(a => a.Column1 == id);

            return concessionaria;
        }
    }
}
