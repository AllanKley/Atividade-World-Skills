$strconn = "Server=DESKTOP-B1G28TP\MSSQLSERVER01;Database=Atividade_Edjalma;Trusted_Connection=True;"
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet tool install --global dotnet-ef
dotnet ef dbcontext scaffold "Server=DESKTOP-B1G28TP\MSSQLSERVER01;Database=Atividade_Edjalma;Trusted_Connection=True;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer