using System;
using System.Collections.Generic;

namespace model;

public partial class Automovei
{
    public byte Id { get; set; }

    public string? Modelo { get; set; }

    public decimal? PreO { get; set; }


    public static Automovei BuscarPorId(int id){
        using (var context = new AtividadeEdjalmaContext())
        {
            var automovel = context.Automoveis.FirstOrDefault(a => a.Id == id);

            return automovel;
        }
    }
}
