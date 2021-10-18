using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BinaryBrainsAPI.Migrations
{
    public partial class fullMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Announcement",
                columns: table => new
                {
                    AnnouncementID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AnnouncementTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnnouncementDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Announcement", x => x.AnnouncementID);
                });

            migrationBuilder.CreateTable(
                name: "ApplicationStatus",
                columns: table => new
                {
                    ApplicationStatusID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationStatusDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationStatus", x => x.ApplicationStatusID);
                });

            migrationBuilder.CreateTable(
                name: "ApplicationTag",
                columns: table => new
                {
                    ApplicationTagID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationArtworkTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ApplicationDimension = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Medium = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExhibitionApplicationID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationTag", x => x.ApplicationTagID);
                });

            migrationBuilder.CreateTable(
                name: "ArtClassType",
                columns: table => new
                {
                    ArtClassTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArtClassTypeDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtClassType", x => x.ArtClassTypeID);
                });

            migrationBuilder.CreateTable(
                name: "ArtworkDimension",
                columns: table => new
                {
                    ArtworkDimensionID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArtworkDimensionDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtworkDimension", x => x.ArtworkDimensionID);
                });

            migrationBuilder.CreateTable(
                name: "ArtworkStatus",
                columns: table => new
                {
                    ArtworkStatusID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArtworkStatusDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtworkStatus", x => x.ArtworkStatusID);
                });

            migrationBuilder.CreateTable(
                name: "ArtworkType",
                columns: table => new
                {
                    ArtworkTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArtworkTypeDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtworkType", x => x.ArtworkTypeID);
                });

            migrationBuilder.CreateTable(
                name: "BookingNotification",
                columns: table => new
                {
                    BookingNotificationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BookNotificationDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingNotification", x => x.BookingNotificationID);
                });

            migrationBuilder.CreateTable(
                name: "Country",
                columns: table => new
                {
                    CountryID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CountryName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.CountryID);
                });

            migrationBuilder.CreateTable(
                name: "ExhibitionType",
                columns: table => new
                {
                    ExhibitionTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExhibitionTypeDecription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExhibitionType", x => x.ExhibitionTypeID);
                });

            migrationBuilder.CreateTable(
                name: "FrameColour",
                columns: table => new
                {
                    FrameColourID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FrameColourDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FrameColour", x => x.FrameColourID);
                });

            migrationBuilder.CreateTable(
                name: "ImageType",
                columns: table => new
                {
                    ImageTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImageTypeDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageType", x => x.ImageTypeID);
                });

            migrationBuilder.CreateTable(
                name: "InvitationStatus",
                columns: table => new
                {
                    InvitationStatusID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InvitationStatusDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvitationStatus", x => x.InvitationStatusID);
                });

            migrationBuilder.CreateTable(
                name: "MediumType",
                columns: table => new
                {
                    MediumTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MediumTypeName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MediumType", x => x.MediumTypeID);
                });

            migrationBuilder.CreateTable(
                name: "Organisation",
                columns: table => new
                {
                    OrganisationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrganisationalAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrganisationalName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organisation", x => x.OrganisationID);
                });

            migrationBuilder.CreateTable(
                name: "PaymentStatus",
                columns: table => new
                {
                    PaymentStatusID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentStatusDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentStatus", x => x.PaymentStatusID);
                });

            migrationBuilder.CreateTable(
                name: "PaymentType",
                columns: table => new
                {
                    PaymentTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentTypeDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentType", x => x.PaymentTypeID);
                });

            migrationBuilder.CreateTable(
                name: "Privileges",
                columns: table => new
                {
                    PrivilegesID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PrivilegeName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrivilegeDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Privileges", x => x.PrivilegesID);
                });

            migrationBuilder.CreateTable(
                name: "Refund",
                columns: table => new
                {
                    RefundID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RefundStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ArtClassRefunded = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Refund", x => x.RefundID);
                });

            migrationBuilder.CreateTable(
                name: "ScheduleType",
                columns: table => new
                {
                    ScheduleTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ScheduleTypeDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ScheduleType", x => x.ScheduleTypeID);
                });

            migrationBuilder.CreateTable(
                name: "SurfaceType",
                columns: table => new
                {
                    SurfaceTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SurfaceTypeName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SurfaceType", x => x.SurfaceTypeID);
                });

            migrationBuilder.CreateTable(
                name: "TeacherType",
                columns: table => new
                {
                    TeacherTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherTypeDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherType", x => x.TeacherTypeID);
                });

            migrationBuilder.CreateTable(
                name: "Venue",
                columns: table => new
                {
                    VenueID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VenueDescription = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venue", x => x.VenueID);
                });

            migrationBuilder.CreateTable(
                name: "Province",
                columns: table => new
                {
                    ProvinceID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProvinceName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CountryID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Province", x => x.ProvinceID);
                    table.ForeignKey(
                        name: "FK_Province_Country_CountryID",
                        column: x => x.CountryID,
                        principalTable: "Country",
                        principalColumn: "CountryID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserType",
                columns: table => new
                {
                    UserTypeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserRoleName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrivilegesID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserType", x => x.UserTypeID);
                    table.ForeignKey(
                        name: "FK_UserType_Privileges_PrivilegesID",
                        column: x => x.PrivilegesID,
                        principalTable: "Privileges",
                        principalColumn: "PrivilegesID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Schedule",
                columns: table => new
                {
                    ScheduleID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ScheduleName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ScheduleDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ScheduleTypeID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schedule", x => x.ScheduleID);
                    table.ForeignKey(
                        name: "FK_Schedule_ScheduleType_ScheduleTypeID",
                        column: x => x.ScheduleTypeID,
                        principalTable: "ScheduleType",
                        principalColumn: "ScheduleTypeID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClassTeacher",
                columns: table => new
                {
                    ClassTeacherID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TeacherSurname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TeacherEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TeacherPhoneNumber = table.Column<string>(type: "varchar(50)", nullable: false),
                    TeacherTypeID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassTeacher", x => x.ClassTeacherID);
                    table.ForeignKey(
                        name: "FK_ClassTeacher_TeacherType_TeacherTypeID",
                        column: x => x.TeacherTypeID,
                        principalTable: "TeacherType",
                        principalColumn: "TeacherTypeID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "City",
                columns: table => new
                {
                    CityID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CityName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProvinceID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_City", x => x.CityID);
                    table.ForeignKey(
                        name: "FK_City_Province_ProvinceID",
                        column: x => x.ProvinceID,
                        principalTable: "Province",
                        principalColumn: "ProvinceID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserFirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserLastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserPhoneNumber = table.Column<string>(type: "varchar(50)", nullable: false),
                    UserPassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserDOB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserAddressLine1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserAddressLine2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserPostalCode = table.Column<int>(type: "int", nullable: false),
                    ArtistBio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserTypeID = table.Column<int>(type: "int", nullable: false),
                    SuburbID = table.Column<int>(type: "int", nullable: false),
                    IsVerified = table.Column<bool>(type: "bit", nullable: false),
                    timestamp = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserID);
                    table.ForeignKey(
                        name: "FK_User_UserType_UserTypeID",
                        column: x => x.UserTypeID,
                        principalTable: "UserType",
                        principalColumn: "UserTypeID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserTypePrivilege",
                columns: table => new
                {
                    UserTypePrivilegeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserTypeID = table.Column<int>(type: "int", nullable: true),
                    PrivilegesID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTypePrivilege", x => x.UserTypePrivilegeID);
                    table.ForeignKey(
                        name: "FK_UserTypePrivilege_Privileges_PrivilegesID",
                        column: x => x.PrivilegesID,
                        principalTable: "Privileges",
                        principalColumn: "PrivilegesID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserTypePrivilege_UserType_UserTypeID",
                        column: x => x.UserTypeID,
                        principalTable: "UserType",
                        principalColumn: "UserTypeID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Exhibition",
                columns: table => new
                {
                    ExhibitionID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExhibitionName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExhibitionDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExhibitionImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExhibitionStartDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExhibitionEndDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExhibitionTypeID = table.Column<int>(type: "int", nullable: false),
                    ScheduleID = table.Column<int>(type: "int", nullable: true),
                    OrganisationID = table.Column<int>(type: "int", nullable: true),
                    VenueID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Exhibition", x => x.ExhibitionID);
                    table.ForeignKey(
                        name: "FK_Exhibition_ExhibitionType_ExhibitionTypeID",
                        column: x => x.ExhibitionTypeID,
                        principalTable: "ExhibitionType",
                        principalColumn: "ExhibitionTypeID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Exhibition_Organisation_OrganisationID",
                        column: x => x.OrganisationID,
                        principalTable: "Organisation",
                        principalColumn: "OrganisationID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Exhibition_Schedule_ScheduleID",
                        column: x => x.ScheduleID,
                        principalTable: "Schedule",
                        principalColumn: "ScheduleID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Exhibition_Venue_VenueID",
                        column: x => x.VenueID,
                        principalTable: "Venue",
                        principalColumn: "VenueID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ArtClass",
                columns: table => new
                {
                    ArtClassID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArtClassName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ArtClassDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ArtClassStartDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ArtClassEndDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ArtClassImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClassLimit = table.Column<int>(type: "int", nullable: false),
                    RefundDayLimit = table.Column<int>(type: "int", nullable: false),
                    ClassPrice = table.Column<double>(type: "float", nullable: false),
                    ArtClassTypeID = table.Column<int>(type: "int", nullable: false),
                    VenueID = table.Column<int>(type: "int", nullable: false),
                    ClassTeacherID = table.Column<int>(type: "int", nullable: true),
                    OrganisationID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtClass", x => x.ArtClassID);
                    table.ForeignKey(
                        name: "FK_ArtClass_ArtClassType_ArtClassTypeID",
                        column: x => x.ArtClassTypeID,
                        principalTable: "ArtClassType",
                        principalColumn: "ArtClassTypeID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArtClass_ClassTeacher_ClassTeacherID",
                        column: x => x.ClassTeacherID,
                        principalTable: "ClassTeacher",
                        principalColumn: "ClassTeacherID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ArtClass_Organisation_OrganisationID",
                        column: x => x.OrganisationID,
                        principalTable: "Organisation",
                        principalColumn: "OrganisationID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArtClass_Venue_VenueID",
                        column: x => x.VenueID,
                        principalTable: "Venue",
                        principalColumn: "VenueID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Suburb",
                columns: table => new
                {
                    SuburbID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SuburbName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CityID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suburb", x => x.SuburbID);
                    table.ForeignKey(
                        name: "FK_Suburb_City_CityID",
                        column: x => x.CityID,
                        principalTable: "City",
                        principalColumn: "CityID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Image",
                columns: table => new
                {
                    ImageID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImageContent = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    ImageTypeID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Image", x => x.ImageID);
                    table.ForeignKey(
                        name: "FK_Image_ImageType_ImageTypeID",
                        column: x => x.ImageTypeID,
                        principalTable: "ImageType",
                        principalColumn: "ImageTypeID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Image_User_UserID",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Artwork",
                columns: table => new
                {
                    ArtworkID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArtworkTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ArtworkPrice = table.Column<double>(type: "float", nullable: false),
                    ArtworkImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SurfaceTypeID = table.Column<int>(type: "int", nullable: false),
                    MediumTypeID = table.Column<int>(type: "int", nullable: false),
                    ArtworkStatusID = table.Column<int>(type: "int", nullable: true),
                    ArtworkDimensionID = table.Column<int>(type: "int", nullable: false),
                    FrameColourID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: true),
                    ArtworkTypeID = table.Column<int>(type: "int", nullable: false),
                    ExhibitionID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Artwork", x => x.ArtworkID);
                    table.ForeignKey(
                        name: "FK_Artwork_ArtworkDimension_ArtworkDimensionID",
                        column: x => x.ArtworkDimensionID,
                        principalTable: "ArtworkDimension",
                        principalColumn: "ArtworkDimensionID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Artwork_ArtworkStatus_ArtworkStatusID",
                        column: x => x.ArtworkStatusID,
                        principalTable: "ArtworkStatus",
                        principalColumn: "ArtworkStatusID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Artwork_ArtworkType_ArtworkTypeID",
                        column: x => x.ArtworkTypeID,
                        principalTable: "ArtworkType",
                        principalColumn: "ArtworkTypeID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Artwork_Exhibition_ExhibitionID",
                        column: x => x.ExhibitionID,
                        principalTable: "Exhibition",
                        principalColumn: "ExhibitionID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Artwork_FrameColour_FrameColourID",
                        column: x => x.FrameColourID,
                        principalTable: "FrameColour",
                        principalColumn: "FrameColourID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Artwork_MediumType_MediumTypeID",
                        column: x => x.MediumTypeID,
                        principalTable: "MediumType",
                        principalColumn: "MediumTypeID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Artwork_SurfaceType_SurfaceTypeID",
                        column: x => x.SurfaceTypeID,
                        principalTable: "SurfaceType",
                        principalColumn: "SurfaceTypeID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Artwork_User_UserID",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ExhibitionAnnouncement",
                columns: table => new
                {
                    ExhibitionAnnouncementID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExhibitionAnnouncementDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExhibitionID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExhibitionAnnouncement", x => x.ExhibitionAnnouncementID);
                    table.ForeignKey(
                        name: "FK_ExhibitionAnnouncement_Exhibition_ExhibitionID",
                        column: x => x.ExhibitionID,
                        principalTable: "Exhibition",
                        principalColumn: "ExhibitionID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExhibitionApplication",
                columns: table => new
                {
                    ExhibitionApplicationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExhibitionApplicationImage1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExhibitionApplicationImage2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExhibitionApplicationImage3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExhibitionID = table.Column<int>(type: "int", nullable: true),
                    ApplicationStatusID = table.Column<int>(type: "int", nullable: true),
                    UserID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExhibitionApplication", x => x.ExhibitionApplicationID);
                    table.ForeignKey(
                        name: "FK_ExhibitionApplication_ApplicationStatus_ApplicationStatusID",
                        column: x => x.ApplicationStatusID,
                        principalTable: "ApplicationStatus",
                        principalColumn: "ApplicationStatusID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ExhibitionApplication_Exhibition_ExhibitionID",
                        column: x => x.ExhibitionID,
                        principalTable: "Exhibition",
                        principalColumn: "ExhibitionID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ExhibitionApplication_User_UserID",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Invitation",
                columns: table => new
                {
                    InvitationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InvitationDetails = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InvitationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExhibitionID = table.Column<int>(type: "int", nullable: false),
                    InvitationStatusID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invitation", x => x.InvitationID);
                    table.ForeignKey(
                        name: "FK_Invitation_Exhibition_ExhibitionID",
                        column: x => x.ExhibitionID,
                        principalTable: "Exhibition",
                        principalColumn: "ExhibitionID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Invitation_InvitationStatus_InvitationStatusID",
                        column: x => x.InvitationStatusID,
                        principalTable: "InvitationStatus",
                        principalColumn: "InvitationStatusID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ArtClassAnnouncement",
                columns: table => new
                {
                    ArtClassAnnouncementID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ArtClassAnnouncementDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ArtClassID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtClassAnnouncement", x => x.ArtClassAnnouncementID);
                    table.ForeignKey(
                        name: "FK_ArtClassAnnouncement_ArtClass_ArtClassID",
                        column: x => x.ArtClassID,
                        principalTable: "ArtClass",
                        principalColumn: "ArtClassID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Booking",
                columns: table => new
                {
                    BookingID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BookingDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    BookingStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BookingNotificationID = table.Column<int>(type: "int", nullable: true),
                    ArtClassID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    PaymentStatusID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Booking", x => x.BookingID);
                    table.ForeignKey(
                        name: "FK_Booking_ArtClass_ArtClassID",
                        column: x => x.ArtClassID,
                        principalTable: "ArtClass",
                        principalColumn: "ArtClassID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Booking_BookingNotification_BookingNotificationID",
                        column: x => x.BookingNotificationID,
                        principalTable: "BookingNotification",
                        principalColumn: "BookingNotificationID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Booking_PaymentStatus_PaymentStatusID",
                        column: x => x.PaymentStatusID,
                        principalTable: "PaymentStatus",
                        principalColumn: "PaymentStatusID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Booking_User_UserID",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Feedback",
                columns: table => new
                {
                    FeedbackID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FeedbackComment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TeacherRating = table.Column<double>(type: "float", nullable: false),
                    DifficultyRating = table.Column<double>(type: "float", nullable: false),
                    OverallRating = table.Column<double>(type: "float", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    ArtClassID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedback", x => x.FeedbackID);
                    table.ForeignKey(
                        name: "FK_Feedback_ArtClass_ArtClassID",
                        column: x => x.ArtClassID,
                        principalTable: "ArtClass",
                        principalColumn: "ArtClassID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Feedback_User_UserID",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExhibitionArtwork",
                columns: table => new
                {
                    ExhibitionArtworkID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExhibitionID = table.Column<int>(type: "int", nullable: true),
                    ArtworkID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExhibitionArtwork", x => x.ExhibitionArtworkID);
                    table.ForeignKey(
                        name: "FK_ExhibitionArtwork_Artwork_ArtworkID",
                        column: x => x.ArtworkID,
                        principalTable: "Artwork",
                        principalColumn: "ArtworkID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ExhibitionArtwork_Exhibition_ExhibitionID",
                        column: x => x.ExhibitionID,
                        principalTable: "Exhibition",
                        principalColumn: "ExhibitionID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserInvitation",
                columns: table => new
                {
                    UserInvitationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<int>(type: "int", nullable: true),
                    InvitationID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserInvitation", x => x.UserInvitationID);
                    table.ForeignKey(
                        name: "FK_UserInvitation_Invitation_InvitationID",
                        column: x => x.InvitationID,
                        principalTable: "Invitation",
                        principalColumn: "InvitationID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserInvitation_User_UserID",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Payment",
                columns: table => new
                {
                    PaymentID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<double>(type: "float", nullable: false),
                    PaymentDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CardNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CardHolderName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ExpiryDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaymentType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaymentStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BookingID = table.Column<int>(type: "int", nullable: false),
                    RefundID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payment", x => x.PaymentID);
                    table.ForeignKey(
                        name: "FK_Payment_Booking_BookingID",
                        column: x => x.BookingID,
                        principalTable: "Booking",
                        principalColumn: "BookingID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Payment_Refund_RefundID",
                        column: x => x.RefundID,
                        principalTable: "Refund",
                        principalColumn: "RefundID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArtClass_ArtClassTypeID",
                table: "ArtClass",
                column: "ArtClassTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_ArtClass_ClassTeacherID",
                table: "ArtClass",
                column: "ClassTeacherID");

            migrationBuilder.CreateIndex(
                name: "IX_ArtClass_OrganisationID",
                table: "ArtClass",
                column: "OrganisationID");

            migrationBuilder.CreateIndex(
                name: "IX_ArtClass_VenueID",
                table: "ArtClass",
                column: "VenueID");

            migrationBuilder.CreateIndex(
                name: "IX_ArtClassAnnouncement_ArtClassID",
                table: "ArtClassAnnouncement",
                column: "ArtClassID");

            migrationBuilder.CreateIndex(
                name: "IX_Artwork_ArtworkDimensionID",
                table: "Artwork",
                column: "ArtworkDimensionID");

            migrationBuilder.CreateIndex(
                name: "IX_Artwork_ArtworkStatusID",
                table: "Artwork",
                column: "ArtworkStatusID");

            migrationBuilder.CreateIndex(
                name: "IX_Artwork_ArtworkTypeID",
                table: "Artwork",
                column: "ArtworkTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Artwork_ExhibitionID",
                table: "Artwork",
                column: "ExhibitionID");

            migrationBuilder.CreateIndex(
                name: "IX_Artwork_FrameColourID",
                table: "Artwork",
                column: "FrameColourID");

            migrationBuilder.CreateIndex(
                name: "IX_Artwork_MediumTypeID",
                table: "Artwork",
                column: "MediumTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Artwork_SurfaceTypeID",
                table: "Artwork",
                column: "SurfaceTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Artwork_UserID",
                table: "Artwork",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_ArtClassID",
                table: "Booking",
                column: "ArtClassID");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_BookingNotificationID",
                table: "Booking",
                column: "BookingNotificationID");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_PaymentStatusID",
                table: "Booking",
                column: "PaymentStatusID");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_UserID",
                table: "Booking",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_City_ProvinceID",
                table: "City",
                column: "ProvinceID");

            migrationBuilder.CreateIndex(
                name: "IX_ClassTeacher_TeacherTypeID",
                table: "ClassTeacher",
                column: "TeacherTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Exhibition_ExhibitionTypeID",
                table: "Exhibition",
                column: "ExhibitionTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Exhibition_OrganisationID",
                table: "Exhibition",
                column: "OrganisationID");

            migrationBuilder.CreateIndex(
                name: "IX_Exhibition_ScheduleID",
                table: "Exhibition",
                column: "ScheduleID");

            migrationBuilder.CreateIndex(
                name: "IX_Exhibition_VenueID",
                table: "Exhibition",
                column: "VenueID");

            migrationBuilder.CreateIndex(
                name: "IX_ExhibitionAnnouncement_ExhibitionID",
                table: "ExhibitionAnnouncement",
                column: "ExhibitionID");

            migrationBuilder.CreateIndex(
                name: "IX_ExhibitionApplication_ApplicationStatusID",
                table: "ExhibitionApplication",
                column: "ApplicationStatusID");

            migrationBuilder.CreateIndex(
                name: "IX_ExhibitionApplication_ExhibitionID",
                table: "ExhibitionApplication",
                column: "ExhibitionID");

            migrationBuilder.CreateIndex(
                name: "IX_ExhibitionApplication_UserID",
                table: "ExhibitionApplication",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_ExhibitionArtwork_ArtworkID",
                table: "ExhibitionArtwork",
                column: "ArtworkID");

            migrationBuilder.CreateIndex(
                name: "IX_ExhibitionArtwork_ExhibitionID",
                table: "ExhibitionArtwork",
                column: "ExhibitionID");

            migrationBuilder.CreateIndex(
                name: "IX_Feedback_ArtClassID",
                table: "Feedback",
                column: "ArtClassID");

            migrationBuilder.CreateIndex(
                name: "IX_Feedback_UserID",
                table: "Feedback",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_Image_ImageTypeID",
                table: "Image",
                column: "ImageTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Image_UserID",
                table: "Image",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_Invitation_ExhibitionID",
                table: "Invitation",
                column: "ExhibitionID");

            migrationBuilder.CreateIndex(
                name: "IX_Invitation_InvitationStatusID",
                table: "Invitation",
                column: "InvitationStatusID");

            migrationBuilder.CreateIndex(
                name: "IX_Payment_BookingID",
                table: "Payment",
                column: "BookingID");

            migrationBuilder.CreateIndex(
                name: "IX_Payment_RefundID",
                table: "Payment",
                column: "RefundID");

            migrationBuilder.CreateIndex(
                name: "IX_Province_CountryID",
                table: "Province",
                column: "CountryID");

            migrationBuilder.CreateIndex(
                name: "IX_Schedule_ScheduleTypeID",
                table: "Schedule",
                column: "ScheduleTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Suburb_CityID",
                table: "Suburb",
                column: "CityID");

            migrationBuilder.CreateIndex(
                name: "IX_User_UserTypeID",
                table: "User",
                column: "UserTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_UserInvitation_InvitationID",
                table: "UserInvitation",
                column: "InvitationID");

            migrationBuilder.CreateIndex(
                name: "IX_UserInvitation_UserID",
                table: "UserInvitation",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_UserType_PrivilegesID",
                table: "UserType",
                column: "PrivilegesID");

            migrationBuilder.CreateIndex(
                name: "IX_UserTypePrivilege_PrivilegesID",
                table: "UserTypePrivilege",
                column: "PrivilegesID");

            migrationBuilder.CreateIndex(
                name: "IX_UserTypePrivilege_UserTypeID",
                table: "UserTypePrivilege",
                column: "UserTypeID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Announcement");

            migrationBuilder.DropTable(
                name: "ApplicationTag");

            migrationBuilder.DropTable(
                name: "ArtClassAnnouncement");

            migrationBuilder.DropTable(
                name: "ExhibitionAnnouncement");

            migrationBuilder.DropTable(
                name: "ExhibitionApplication");

            migrationBuilder.DropTable(
                name: "ExhibitionArtwork");

            migrationBuilder.DropTable(
                name: "Feedback");

            migrationBuilder.DropTable(
                name: "Image");

            migrationBuilder.DropTable(
                name: "Payment");

            migrationBuilder.DropTable(
                name: "PaymentType");

            migrationBuilder.DropTable(
                name: "Suburb");

            migrationBuilder.DropTable(
                name: "UserInvitation");

            migrationBuilder.DropTable(
                name: "UserTypePrivilege");

            migrationBuilder.DropTable(
                name: "ApplicationStatus");

            migrationBuilder.DropTable(
                name: "Artwork");

            migrationBuilder.DropTable(
                name: "ImageType");

            migrationBuilder.DropTable(
                name: "Booking");

            migrationBuilder.DropTable(
                name: "Refund");

            migrationBuilder.DropTable(
                name: "City");

            migrationBuilder.DropTable(
                name: "Invitation");

            migrationBuilder.DropTable(
                name: "ArtworkDimension");

            migrationBuilder.DropTable(
                name: "ArtworkStatus");

            migrationBuilder.DropTable(
                name: "ArtworkType");

            migrationBuilder.DropTable(
                name: "FrameColour");

            migrationBuilder.DropTable(
                name: "MediumType");

            migrationBuilder.DropTable(
                name: "SurfaceType");

            migrationBuilder.DropTable(
                name: "ArtClass");

            migrationBuilder.DropTable(
                name: "BookingNotification");

            migrationBuilder.DropTable(
                name: "PaymentStatus");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Province");

            migrationBuilder.DropTable(
                name: "Exhibition");

            migrationBuilder.DropTable(
                name: "InvitationStatus");

            migrationBuilder.DropTable(
                name: "ArtClassType");

            migrationBuilder.DropTable(
                name: "ClassTeacher");

            migrationBuilder.DropTable(
                name: "UserType");

            migrationBuilder.DropTable(
                name: "Country");

            migrationBuilder.DropTable(
                name: "ExhibitionType");

            migrationBuilder.DropTable(
                name: "Organisation");

            migrationBuilder.DropTable(
                name: "Schedule");

            migrationBuilder.DropTable(
                name: "Venue");

            migrationBuilder.DropTable(
                name: "TeacherType");

            migrationBuilder.DropTable(
                name: "Privileges");

            migrationBuilder.DropTable(
                name: "ScheduleType");
        }
    }
}
