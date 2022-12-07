using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace model;

public partial class AtividadeEdjalmaContext : DbContext
{
    public AtividadeEdjalmaContext()
    {
    }

    public AtividadeEdjalmaContext(DbContextOptions<AtividadeEdjalmaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alocacao> Alocacaos { get; set; }

    public virtual DbSet<Automovei> Automoveis { get; set; }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Concessionaria> Concessionarias { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

        => optionsBuilder.UseSqlServer("Server=JVLPC0553;Database=Atividade_Edjalma;Trusted_Connection=True;TrustServerCertificate=True;");



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alocacao>(entity =>
        {
            entity.ToTable("alocacao");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Area).HasColumnName("area");
            entity.Property(e => e.Automovel).HasColumnName("automovel");
            entity.Property(e => e.ConcessionRia).HasColumnName("concession_ria");
            entity.Property(e => e.Quantidade).HasColumnName("quantidade");
        });

        modelBuilder.Entity<Automovei>(entity =>
        {
            entity.ToTable("automoveis");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Modelo)
                .HasMaxLength(50)
                .HasColumnName("modelo");
            entity.Property(e => e.PreO)
                .HasColumnType("money")
                .HasColumnName("pre_o");
        });

        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.ToTable("clientes");

            entity.Property(e => e.Nome).HasMaxLength(50);
        });

        modelBuilder.Entity<Concessionaria>(entity =>
        {
            entity.HasKey(e => e.Column1);

            entity.ToTable("concessionarias");

            entity.Property(e => e.Column1).HasColumnName("column1");
            entity.Property(e => e.Column2)
                .HasMaxLength(50)
                .HasColumnName("column2");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
