using System;
using System.Collections.Generic;

namespace model;

public partial class Cliente
{
    public byte Id { get; set; }

    public string? Nome { get; set; }


    public static Cliente[] BuscarTodos(){
        using (var context = new AtividadeEdjalmaContext())
        {
            var clientes = context.Clientes.ToArray();

            return clientes;
        }
    }
}
