using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Auxilium_API.Models
{
    public partial class AuxiliumContext : DbContext
    {
        public AuxiliumContext()
        {
        }

        public AuxiliumContext(DbContextOptions<AuxiliumContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Food> Foods { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=NAG1-LHP-N07128\\MSSQLSERVER01;Database=Auxilium;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Food>(entity =>
            {
                entity.ToTable("food");

                entity.Property(e => e.FoodId).HasColumnName("food-id");

                entity.Property(e => e.FoodAvailability).HasColumnName("food-availability");

                entity.Property(e => e.FoodDesc)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("food-desc");

                entity.Property(e => e.FoodLastModifyDate)
                    .HasColumnType("datetime")
                    .HasColumnName("food-last-modify-date");

                entity.Property(e => e.FoodLicenseNumber).HasColumnName("food-license-number");

                entity.Property(e => e.FoodPackaging)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("food-packaging");

                entity.Property(e => e.FoodServiceAddress)
                    .IsUnicode(false)
                    .HasColumnName("food-service-address");

                entity.Property(e => e.SupplierId).HasColumnName("supplier-id");

                entity.HasOne(d => d.Supplier)
                    .WithMany(p => p.Foods)
                    .HasForeignKey(d => d.SupplierId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_food_suppliers");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("products");

                entity.Property(e => e.ProductId).HasColumnName("product-id");

                entity.Property(e => e.ProductAvailability).HasColumnName("product-availability");

                entity.Property(e => e.ProductDesc)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("product-desc");

                entity.Property(e => e.ProductGstn)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("product-gstn");

                entity.Property(e => e.ProductLastModifyDate)
                    .HasColumnType("datetime")
                    .HasColumnName("product-last-modify-date");

                entity.Property(e => e.ProductServiceAddress)
                    .IsUnicode(false)
                    .HasColumnName("product-service-address");

                entity.Property(e => e.ProductType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("product-type");

                entity.Property(e => e.SupplierId).HasColumnName("supplier-id");

                entity.HasOne(d => d.Supplier)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.SupplierId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_products_suppliers");
            });

            modelBuilder.Entity<Supplier>(entity =>
            {
                entity.ToTable("suppliers");

                entity.Property(e => e.SupplierId).HasColumnName("supplier-id");

                entity.Property(e => e.SupplierAddress)
                    .IsUnicode(false)
                    .HasColumnName("supplier-address");

                entity.Property(e => e.SupplierCity)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("supplier-city");

                entity.Property(e => e.SupplierContact)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("supplier-contact");

                entity.Property(e => e.SupplierEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("supplier-email");

                entity.Property(e => e.SupplierName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("supplier-name");

                entity.Property(e => e.SupplierPassword)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("supplier-password");

                entity.Property(e => e.SupplierState)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("supplier-state");

                entity.Property(e => e.SupplierUsername)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("supplier-username");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
