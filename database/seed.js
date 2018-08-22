const { db } = require("./index");
const Art = require("./models/art");
const User = require("./models/user");

const newUsers = [
  {
    firstName: "Zohayb",
    lastName: "Shaikh",
    username: "zohaybshaikh",
    email: "zs@email.com",
    password: "12345678",
    picture:
      "https://instagram.fnyc1-1.fna.fbcdn.net/vp/5f39b6a5ca6d9b90927122be817e7d7b/5BD99218/t51.2885-15/sh0.08/e35/p640x640/28432578_152933198729058_7849606578062753792_n.jpg",
    terms: true
  },
  {
    firstName: "Brian",
    lastName: "Kim",
    username: "briankim",
    email: "bk@email.com",
    password: "12345678",
    picture:
      "https://scontent-lga3-1.cdninstagram.com/vp/cfcf7452e4cb92e6013d22169adbd160/5C09B971/t51.2885-19/s320x320/37815431_1240269169449347_3511183159444111360_n.jpg",
    terms: true
  },
  {
    firstName: "Jungsoo",
    lastName: "Bin",
    username: "jungsoobin",
    email: "jb@email.com",
    password: "12345678",
    picture:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/jungsooBin.jpeg?alt=media&token=c12c7a53-0825-4d05-9717-4c1fd10ee44f",
    terms: true
  },
  {
    firstName: "Matt",
    lastName: "Dworkin",
    username: "mattdworkin",
    email: "md@email.com",
    password: "12345678",
    picture:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/matt.jpg?alt=media&token=b0835ea3-6809-43e0-baac-b38c4eb0e477",
    terms: true
  }
];

const newArt = [
  {
    artistId: 1,
    location: [40.70922922853889, -74.00780365188648],
    description: "Cool art",
    title: "Starry Night",
    coverPhoto:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/images%2F11?alt=media&token=76f3d5f3-d9d9-440d-aff2-56f15d7150f5",
    likes: 6,
    artPiece: {
      object: {
        type: "Scene",
        uuid: "07852AFC-5D7C-448E-B4CD-E91285CB1F76",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        children: [
          {
            type: "Mesh",
            uuid: "DBF8CB5D-5FC0-4D0C-B371-DE19805EBC5B",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "4FEE5590-EFC2-4927-A114-087E12D463DF",
            material: "99B118CB-753B-4320-9DE6-074A0B4FE1E2",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "A19D1267-57E8-4982-9B44-A7F03306D53F",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "A3DC38E3-48B2-43E8-A516-1C62DADFCF93",
            material: "DEE91FC6-9F1B-4318-83F5-D73FBF9839D7",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "A5F3F422-9E16-48F4-8FC1-F3210C557DDE",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "2BE19AC9-6F5C-4C78-BEC6-904A4C1E602C",
            material: "5A50229E-5A7D-4131-AFB0-D4FE168FEC1F",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "F0FE85DB-EC4D-404F-8AFC-D2F9E88BA2A4",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "5955EC80-C168-4E64-877F-B8B016CDD429",
            material: "B4290C66-549F-4B63-9FFF-98B3BF169536",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "F7263B4C-F933-47D4-96B0-680579FB362B",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "A5994C42-3DF1-4AC3-B502-F254C615AC31",
            material: "4019B4DC-D022-4356-9927-659AAF25CA9C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "6435CE89-0BF2-40E3-BF85-E7E975168D1D",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "D930BEBC-EB2B-4F47-B510-AE0D90A48ED0",
            material: "1FF778FE-6D5E-4E10-A409-7EA0E468C599",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "2256B9BD-1ED2-4FEA-8E28-6CE87463EFB0",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.0074506684331390426,
              0.0023008468189983974,
              -0.0006353804844024818,
              1
            ],
            geometry: "C43F954B-50AB-4165-981B-B67489BB7A56",
            material: "E6EC1566-4E3C-4886-B238-C3AB188C151E",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "3920B45E-C06F-4462-9F7E-491FA479CC9D",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.00030042203281734515,
              0.01477240844530019,
              -0.00010818468674014363,
              1
            ],
            geometry: "BE6A4C58-602A-42CC-9107-E7140C2155F6",
            material: "6F89502D-FE99-4AD2-B0F6-338F70FCB2BA",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "D8197DB7-63E5-4637-9CB3-59F36F5DA67F",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.004477774516093639,
              0.016550800931240752,
              -0.00044811431815146356,
              1
            ],
            geometry: "750831D7-533F-4AEE-8F2F-57FACFC17D64",
            material: "7774439A-1405-4B9E-ABAB-8806DF178AED",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "E155445B-2434-4C63-92EC-F3D47D75B47C",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.01798627250886835,
              0.022363007341816756,
              -0.0005697949780146155,
              1
            ],
            geometry: "9F39358F-1CA8-4FB2-B7DF-7632D7AC0ECE",
            material: "0C5C52F1-7F42-4FE2-861F-6DF3FE27E5D0",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "46137396-B702-4497-AACB-3BA08E4143EF",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.01798627250886835,
              0.022363007341816756,
              -0.0005697949780146155,
              1
            ],
            geometry: "BC19DEF1-B01A-4E1D-B12A-274BFA6D1BE8",
            material: "36D7125B-6CC9-44F8-9EA4-75F2E9675831",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "7E2DB213-CA90-4458-9D51-CB0536C89641",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.0417239340429058,
              0.03756724814228736,
              -0.00822677956379903,
              1
            ],
            geometry: "B5AF9871-ED14-41DA-B35E-23643A81640E",
            material: "ADCC49A9-C7CE-4604-A21F-460280C7369B",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "C98D9731-685F-41DA-B961-01FC87056F62",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.05387171718317242,
              0.04144496584774097,
              -0.007176027359686471,
              1
            ],
            geometry: "7889DE0B-C577-4DB2-AC41-B8492C6694F9",
            material: "AA515381-3F54-46D0-A3D9-0DE46007F231",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "14B977BB-5229-412A-9C22-DFF9F1BF1A1C",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.053021523334597594,
              0.04795325640420272,
              -0.009590797821570357,
              1
            ],
            geometry: "1FEAD4C1-1851-4543-9EF7-357388A937AD",
            material: "AD393A5F-820D-441E-951D-BBE5A768EC05",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "9FAB0FA8-A0F9-4A10-8221-3936599C2FB5",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.07670418151911859,
              0.05449191389145469,
              -0.005030953207402568,
              1
            ],
            geometry: "F6521B13-80AA-41FB-AD16-376650DC6AB8",
            material: "5F1EC4AC-A0E5-4648-9524-764B5F656CD5",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "B947A20B-B1EE-42F6-8559-D114111CED87",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.07908984684326725,
              0.05929680909100741,
              -0.0077552419600870285,
              1
            ],
            geometry: "21EBC54C-929E-49AC-BA14-FF2F9FE179B8",
            material: "D7B5A0EF-6F56-437A-8758-D095DA731FD1",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "FD48B3D2-7347-4F21-BFA4-46D07473E7F8",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.10573857853130617,
              0.06210930798796169,
              0.003967073604164186,
              1
            ],
            geometry: "0638A181-5A2B-47EF-A13E-C96E4DD37DB4",
            material: "A558B017-518F-4622-A467-71F45A2D366C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "B75FBDCA-552A-4C29-B688-D6F99B79C8A5",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.10573857853130617,
              0.06210930798796169,
              0.003967073604164186,
              1
            ],
            geometry: "A6B760B6-670C-4C87-91FA-829E97FA6A26",
            material: "17D10791-6D26-4C1F-8251-04417CE52C68",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "EA74045B-1DB7-4D18-885C-CC38DCC69F93",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.1336029831811833,
              0.0633716842718406,
              0.022730344691938655,
              1
            ],
            geometry: "F23545BD-B660-43C8-8A07-1403CA58F9DC",
            material: "375E6224-E2CF-4206-AED0-00BC818E27C8",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "396D09B9-6B97-4189-A5F7-C82E1F3D50EE",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.15501074255880506,
              0.06093963326318599,
              0.040945335472465184,
              1
            ],
            geometry: "A575DEF7-A690-4AD6-9724-4F3343244573",
            material: "FCCF2278-4FEC-4F88-A5E7-C11483264743",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "139D23C7-1747-4971-A301-2B4412118F4D",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.1667324555692678,
              0.055422497934812305,
              0.05533928957306825,
              1
            ],
            geometry: "DE1B674D-70B8-401D-8C68-189F879D1DC8",
            material: "3F359552-CAC7-4196-A60E-8EE5F24BDB33",
            castShadow: true
          }
        ],
        background: {
          name: "",
          uuid: "0BE7139D-C7F9-4DE0-8029-C07A60182680",
          wrap: [1001, 1001],
          flipY: true,
          center: [0, 0],
          format: 1023,
          offset: [0, 0],
          repeat: [1, 1],
          mapping: 300,
          metadata: {
            type: "Texture",
            version: 4.5,
            generator: "Texture.toJSON"
          },
          rotation: 0,
          magFilter: 1006,
          minFilter: 1008,
          anisotropy: 1
        }
      },
      metadata: { type: "Object", version: 4.5, generator: "Object3D.toJSON" },
      materials: [
        {
          type: "MeshBasicMaterial",
          uuid: "99B118CB-753B-4320-9DE6-074A0B4FE1E2",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "DEE91FC6-9F1B-4318-83F5-D73FBF9839D7",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "5A50229E-5A7D-4131-AFB0-D4FE168FEC1F",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "B4290C66-549F-4B63-9FFF-98B3BF169536",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "4019B4DC-D022-4356-9927-659AAF25CA9C",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "1FF778FE-6D5E-4E10-A409-7EA0E468C599",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E6EC1566-4E3C-4886-B238-C3AB188C151E",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "6F89502D-FE99-4AD2-B0F6-338F70FCB2BA",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "7774439A-1405-4B9E-ABAB-8806DF178AED",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "0C5C52F1-7F42-4FE2-861F-6DF3FE27E5D0",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "36D7125B-6CC9-44F8-9EA4-75F2E9675831",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "ADCC49A9-C7CE-4604-A21F-460280C7369B",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "AA515381-3F54-46D0-A3D9-0DE46007F231",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "AD393A5F-820D-441E-951D-BBE5A768EC05",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "5F1EC4AC-A0E5-4648-9524-764B5F656CD5",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "D7B5A0EF-6F56-437A-8758-D095DA731FD1",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "A558B017-518F-4622-A467-71F45A2D366C",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "17D10791-6D26-4C1F-8251-04417CE52C68",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "375E6224-E2CF-4206-AED0-00BC818E27C8",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "FCCF2278-4FEC-4F88-A5E7-C11483264743",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "3F359552-CAC7-4196-A60E-8EE5F24BDB33",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        }
      ],
      geometries: [
        {
          type: "BoxGeometry",
          uuid: "4FEE5590-EFC2-4927-A114-087E12D463DF",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "A3DC38E3-48B2-43E8-A516-1C62DADFCF93",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "2BE19AC9-6F5C-4C78-BEC6-904A4C1E602C",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "5955EC80-C168-4E64-877F-B8B016CDD429",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "A5994C42-3DF1-4AC3-B502-F254C615AC31",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "D930BEBC-EB2B-4F47-B510-AE0D90A48ED0",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "C43F954B-50AB-4165-981B-B67489BB7A56",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "BE6A4C58-602A-42CC-9107-E7140C2155F6",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "750831D7-533F-4AEE-8F2F-57FACFC17D64",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "9F39358F-1CA8-4FB2-B7DF-7632D7AC0ECE",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "BC19DEF1-B01A-4E1D-B12A-274BFA6D1BE8",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "B5AF9871-ED14-41DA-B35E-23643A81640E",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "7889DE0B-C577-4DB2-AC41-B8492C6694F9",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "1FEAD4C1-1851-4543-9EF7-357388A937AD",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "F6521B13-80AA-41FB-AD16-376650DC6AB8",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "21EBC54C-929E-49AC-BA14-FF2F9FE179B8",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "0638A181-5A2B-47EF-A13E-C96E4DD37DB4",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "A6B760B6-670C-4C87-91FA-829E97FA6A26",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "F23545BD-B660-43C8-8A07-1403CA58F9DC",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "A575DEF7-A690-4AD6-9724-4F3343244573",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "DE1B674D-70B8-401D-8C68-189F879D1DC8",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        }
      ]
    }
  },
  {
    artistId: 2,
    description: "Out of this world",
    title: "Solar System",
    location: [40.70922922853889, -74.00780365188648],
    coverPhoto:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/images%2F10?alt=media&token=671c273a-e301-428c-8469-3e7ec843ea26",
    likes: 8,
    artPiece: {
      object: {
        type: "Scene",
        uuid: "07852AFC-5D7C-448E-B4CD-E91285CB1F76",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        children: [
          {
            type: "Mesh",
            uuid: "DBF8CB5D-5FC0-4D0C-B371-DE19805EBC5B",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "4FEE5590-EFC2-4927-A114-087E12D463DF",
            material: "99B118CB-753B-4320-9DE6-074A0B4FE1E2",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "A19D1267-57E8-4982-9B44-A7F03306D53F",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "A3DC38E3-48B2-43E8-A516-1C62DADFCF93",
            material: "DEE91FC6-9F1B-4318-83F5-D73FBF9839D7",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "A5F3F422-9E16-48F4-8FC1-F3210C557DDE",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "2BE19AC9-6F5C-4C78-BEC6-904A4C1E602C",
            material: "5A50229E-5A7D-4131-AFB0-D4FE168FEC1F",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "F0FE85DB-EC4D-404F-8AFC-D2F9E88BA2A4",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "5955EC80-C168-4E64-877F-B8B016CDD429",
            material: "B4290C66-549F-4B63-9FFF-98B3BF169536",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "F7263B4C-F933-47D4-96B0-680579FB362B",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "A5994C42-3DF1-4AC3-B502-F254C615AC31",
            material: "4019B4DC-D022-4356-9927-659AAF25CA9C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "6435CE89-0BF2-40E3-BF85-E7E975168D1D",
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            geometry: "D930BEBC-EB2B-4F47-B510-AE0D90A48ED0",
            material: "1FF778FE-6D5E-4E10-A409-7EA0E468C599",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "2256B9BD-1ED2-4FEA-8E28-6CE87463EFB0",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.0074506684331390426,
              0.0023008468189983974,
              -0.0006353804844024818,
              1
            ],
            geometry: "C43F954B-50AB-4165-981B-B67489BB7A56",
            material: "E6EC1566-4E3C-4886-B238-C3AB188C151E",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "3920B45E-C06F-4462-9F7E-491FA479CC9D",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.00030042203281734515,
              0.01477240844530019,
              -0.00010818468674014363,
              1
            ],
            geometry: "BE6A4C58-602A-42CC-9107-E7140C2155F6",
            material: "6F89502D-FE99-4AD2-B0F6-338F70FCB2BA",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "D8197DB7-63E5-4637-9CB3-59F36F5DA67F",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.004477774516093639,
              0.016550800931240752,
              -0.00044811431815146356,
              1
            ],
            geometry: "750831D7-533F-4AEE-8F2F-57FACFC17D64",
            material: "7774439A-1405-4B9E-ABAB-8806DF178AED",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "E155445B-2434-4C63-92EC-F3D47D75B47C",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.01798627250886835,
              0.022363007341816756,
              -0.0005697949780146155,
              1
            ],
            geometry: "9F39358F-1CA8-4FB2-B7DF-7632D7AC0ECE",
            material: "0C5C52F1-7F42-4FE2-861F-6DF3FE27E5D0",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "46137396-B702-4497-AACB-3BA08E4143EF",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.01798627250886835,
              0.022363007341816756,
              -0.0005697949780146155,
              1
            ],
            geometry: "BC19DEF1-B01A-4E1D-B12A-274BFA6D1BE8",
            material: "36D7125B-6CC9-44F8-9EA4-75F2E9675831",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "7E2DB213-CA90-4458-9D51-CB0536C89641",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.0417239340429058,
              0.03756724814228736,
              -0.00822677956379903,
              1
            ],
            geometry: "B5AF9871-ED14-41DA-B35E-23643A81640E",
            material: "ADCC49A9-C7CE-4604-A21F-460280C7369B",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "C98D9731-685F-41DA-B961-01FC87056F62",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.05387171718317242,
              0.04144496584774097,
              -0.007176027359686471,
              1
            ],
            geometry: "7889DE0B-C577-4DB2-AC41-B8492C6694F9",
            material: "AA515381-3F54-46D0-A3D9-0DE46007F231",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "14B977BB-5229-412A-9C22-DFF9F1BF1A1C",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.053021523334597594,
              0.04795325640420272,
              -0.009590797821570357,
              1
            ],
            geometry: "1FEAD4C1-1851-4543-9EF7-357388A937AD",
            material: "AD393A5F-820D-441E-951D-BBE5A768EC05",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "9FAB0FA8-A0F9-4A10-8221-3936599C2FB5",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.07670418151911859,
              0.05449191389145469,
              -0.005030953207402568,
              1
            ],
            geometry: "F6521B13-80AA-41FB-AD16-376650DC6AB8",
            material: "5F1EC4AC-A0E5-4648-9524-764B5F656CD5",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "B947A20B-B1EE-42F6-8559-D114111CED87",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.07908984684326725,
              0.05929680909100741,
              -0.0077552419600870285,
              1
            ],
            geometry: "21EBC54C-929E-49AC-BA14-FF2F9FE179B8",
            material: "D7B5A0EF-6F56-437A-8758-D095DA731FD1",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "FD48B3D2-7347-4F21-BFA4-46D07473E7F8",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.10573857853130617,
              0.06210930798796169,
              0.003967073604164186,
              1
            ],
            geometry: "0638A181-5A2B-47EF-A13E-C96E4DD37DB4",
            material: "A558B017-518F-4622-A467-71F45A2D366C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "B75FBDCA-552A-4C29-B688-D6F99B79C8A5",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.10573857853130617,
              0.06210930798796169,
              0.003967073604164186,
              1
            ],
            geometry: "A6B760B6-670C-4C87-91FA-829E97FA6A26",
            material: "17D10791-6D26-4C1F-8251-04417CE52C68",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "EA74045B-1DB7-4D18-885C-CC38DCC69F93",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.1336029831811833,
              0.0633716842718406,
              0.022730344691938655,
              1
            ],
            geometry: "F23545BD-B660-43C8-8A07-1403CA58F9DC",
            material: "375E6224-E2CF-4206-AED0-00BC818E27C8",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "396D09B9-6B97-4189-A5F7-C82E1F3D50EE",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.15501074255880506,
              0.06093963326318599,
              0.040945335472465184,
              1
            ],
            geometry: "A575DEF7-A690-4AD6-9724-4F3343244573",
            material: "FCCF2278-4FEC-4F88-A5E7-C11483264743",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "139D23C7-1747-4971-A301-2B4412118F4D",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.1667324555692678,
              0.055422497934812305,
              0.05533928957306825,
              1
            ],
            geometry: "DE1B674D-70B8-401D-8C68-189F879D1DC8",
            material: "3F359552-CAC7-4196-A60E-8EE5F24BDB33",
            castShadow: true
          }
        ],
        background: {
          name: "",
          uuid: "0BE7139D-C7F9-4DE0-8029-C07A60182680",
          wrap: [1001, 1001],
          flipY: true,
          center: [0, 0],
          format: 1023,
          offset: [0, 0],
          repeat: [1, 1],
          mapping: 300,
          metadata: {
            type: "Texture",
            version: 4.5,
            generator: "Texture.toJSON"
          },
          rotation: 0,
          magFilter: 1006,
          minFilter: 1008,
          anisotropy: 1
        }
      },
      metadata: { type: "Object", version: 4.5, generator: "Object3D.toJSON" },
      materials: [
        {
          type: "MeshBasicMaterial",
          uuid: "99B118CB-753B-4320-9DE6-074A0B4FE1E2",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "DEE91FC6-9F1B-4318-83F5-D73FBF9839D7",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "5A50229E-5A7D-4131-AFB0-D4FE168FEC1F",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "B4290C66-549F-4B63-9FFF-98B3BF169536",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "4019B4DC-D022-4356-9927-659AAF25CA9C",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "1FF778FE-6D5E-4E10-A409-7EA0E468C599",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E6EC1566-4E3C-4886-B238-C3AB188C151E",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "6F89502D-FE99-4AD2-B0F6-338F70FCB2BA",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "7774439A-1405-4B9E-ABAB-8806DF178AED",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "0C5C52F1-7F42-4FE2-861F-6DF3FE27E5D0",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "36D7125B-6CC9-44F8-9EA4-75F2E9675831",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "ADCC49A9-C7CE-4604-A21F-460280C7369B",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "AA515381-3F54-46D0-A3D9-0DE46007F231",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "AD393A5F-820D-441E-951D-BBE5A768EC05",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "5F1EC4AC-A0E5-4648-9524-764B5F656CD5",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "D7B5A0EF-6F56-437A-8758-D095DA731FD1",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "A558B017-518F-4622-A467-71F45A2D366C",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "17D10791-6D26-4C1F-8251-04417CE52C68",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "375E6224-E2CF-4206-AED0-00BC818E27C8",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "FCCF2278-4FEC-4F88-A5E7-C11483264743",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "3F359552-CAC7-4196-A60E-8EE5F24BDB33",
          color: 16777215,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        }
      ],
      geometries: [
        {
          type: "BoxGeometry",
          uuid: "4FEE5590-EFC2-4927-A114-087E12D463DF",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "A3DC38E3-48B2-43E8-A516-1C62DADFCF93",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "2BE19AC9-6F5C-4C78-BEC6-904A4C1E602C",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "5955EC80-C168-4E64-877F-B8B016CDD429",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "A5994C42-3DF1-4AC3-B502-F254C615AC31",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "D930BEBC-EB2B-4F47-B510-AE0D90A48ED0",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "C43F954B-50AB-4165-981B-B67489BB7A56",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "BE6A4C58-602A-42CC-9107-E7140C2155F6",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "750831D7-533F-4AEE-8F2F-57FACFC17D64",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "9F39358F-1CA8-4FB2-B7DF-7632D7AC0ECE",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "BC19DEF1-B01A-4E1D-B12A-274BFA6D1BE8",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "B5AF9871-ED14-41DA-B35E-23643A81640E",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "7889DE0B-C577-4DB2-AC41-B8492C6694F9",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "1FEAD4C1-1851-4543-9EF7-357388A937AD",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "F6521B13-80AA-41FB-AD16-376650DC6AB8",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "21EBC54C-929E-49AC-BA14-FF2F9FE179B8",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "0638A181-5A2B-47EF-A13E-C96E4DD37DB4",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "A6B760B6-670C-4C87-91FA-829E97FA6A26",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "F23545BD-B660-43C8-8A07-1403CA58F9DC",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "A575DEF7-A690-4AD6-9724-4F3343244573",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "DE1B674D-70B8-401D-8C68-189F879D1DC8",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        }
      ]
    }
  },
  {
    artistId: 3,
    description: "Its a jungle out here",
    title: "AR Tree",
    coverPhoto:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/images%2F12?alt=media&token=455a0f9e-ee65-43f1-93a6-09ec27d83fbd",
    likes: 6,
    location: [40.70922922853889, -74.00780365188648],
    artPiece: {
      object: {
        type: "Scene",
        uuid: "20C1E615-28E8-4432-90D6-86AD5B20558E",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        children: [
          {
            type: "Mesh",
            uuid: "301699CD-8CC2-485F-9E07-637A818FE5E1",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.068625958530782,
              0.10492041331134844,
              0.08742894019713483,
              1
            ],
            geometry: "F5F9736F-1CF7-4140-9493-23DA9716CC68",
            material: "70A4E955-DD8D-4532-AB97-6517B9D31AD3",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "D78EDF2B-2E3D-451E-A5FB-F888120B77C2",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.06891257335301243,
              0.10469535949379397,
              0.08730881521529754,
              1
            ],
            geometry: "4D1CBDB7-ACDA-4994-884F-63C17514E366",
            material: "A1BE37E2-BDCA-4B3E-B973-D18E61BE4EF2",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "9A294698-661D-4206-9670-2E9A7139CDB0",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.06847414609147524,
              0.10417320187524595,
              0.08720281217888075,
              1
            ],
            geometry: "97CC2264-8F05-4E50-B35F-1D81A7719A67",
            material: "0B9DA8AC-0D30-4B78-9FA9-D055C47F11E9",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "51BFD4D2-F523-42C2-AB8B-0649C3CED7FC",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.06741258191412206,
              0.10382928401161695,
              0.08465859293973707,
              1
            ],
            geometry: "40D0776A-94D3-4EF3-B449-BA27B7CB8606",
            material: "459A0F02-9A76-4B14-BCB5-843D4FE9D95B",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "0C12A8A4-7ED8-4792-8C0D-5D065F698A35",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.05916988916164796,
              0.10543031614991645,
              0.08041835539597075,
              1
            ],
            geometry: "BD41D3FB-B853-4A91-9FFD-8675FBC0E6F7",
            material: "23FA1AB1-CF11-4037-820E-B4919F707282",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "546ED5C5-7DD1-42E3-B640-8332217E7C10",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.0569764216649746,
              0.10583483326302551,
              0.07939730060144883,
              1
            ],
            geometry: "56CA7FF9-25EB-45F7-904D-E8A8950E684D",
            material: "E380495F-B0F2-4245-9710-9057EDD6436D",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "585DB7E1-B432-45B8-BA6E-644A8C25C8C9",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.03167044833586359,
              0.11012951547051106,
              0.07030591264620677,
              1
            ],
            geometry: "1CB3EA02-B857-4AE3-9F89-465E70AC9774",
            material: "574A4707-0CEC-424C-94DF-81810464A72C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "2E2A547F-5E10-412F-A728-463C36F7FD5D",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.011862390860179576,
              0.11185890169507466,
              0.0631339144019064,
              1
            ],
            geometry: "D3B88973-3963-40F2-9B12-02EB9E939455",
            material: "F670E338-762B-4191-99F8-70C2B05D8DFA",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "96FCEB22-0C78-460A-8363-B9BFC4B92DB1",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.012024525782258672,
              0.11293340983879328,
              0.05610834300058302,
              1
            ],
            geometry: "6953A502-F509-4902-9FC9-AA550BED954B",
            material: "1B876164-9E19-4AD2-A091-48BF004E769C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "5E3BA4B5-45C2-4200-85E3-319D6BC7BEC1",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.01849226071583137,
              0.11300601684304892,
              0.05416796360872254,
              1
            ],
            geometry: "782F6293-E5EA-49FF-A56C-59B4C1FEF54A",
            material: "9CE40FA2-9612-46B7-B9F6-7F6B610020E1",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "B6E55CB7-1FB5-4277-9118-93D198D5B7CC",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.06312915601232928,
              0.1136387218833563,
              0.04402820060195339,
              1
            ],
            geometry: "5D2D80A2-CE26-45E9-AA5B-70B8D2220E5B",
            material: "9FA7755C-6A07-4E89-B8FA-ED3F4743E67F",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "C1E84B51-1C90-4E86-A484-9ED7072AEE65",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.09869700074886187,
              0.11322382247122006,
              0.03839702811498446,
              1
            ],
            geometry: "D58DB731-6E85-4F17-9113-D4CACA66F65C",
            material: "38767B2A-8884-4E68-BBB3-0812EC807E6D",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "9C907C8F-1066-4D07-A21C-5D290D6CA627",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.09869700074886187,
              0.11322382247122006,
              0.03839702811498446,
              1
            ],
            geometry: "568441BE-4C08-4B5B-ABF9-F968CA23E5B6",
            material: "5FE775A5-519F-418F-B205-4B9BD495BCB7",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "3D9A02A6-CBD5-4DF9-80FD-FF303850ADDF",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.13623251974695683,
              0.11272499672072805,
              0.03586303647480093,
              1
            ],
            geometry: "239738CD-9FE3-4D01-A608-17A35804C28E",
            material: "C6A98C78-B79F-421D-9571-DEC65DF9D14E",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "4A49D893-7BE4-48E9-B387-10FB5E065A0C",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.19577334202659585,
              0.11365791302517332,
              0.03782780961515616,
              1
            ],
            geometry: "45DC6AEA-BE69-41A9-AAC6-3EEABCBF3220",
            material: "54D1D3BF-CED9-433D-9AD0-80D91048D703",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "0CD30002-86CC-4DA5-A7B6-6124DD4002C1",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.20539827867520438,
              0.11349886607596663,
              0.038903929930323454,
              1
            ],
            geometry: "72C4A328-8A78-412C-9B6A-5D511AAC5F7D",
            material: "3D0B729C-A2AB-4F2B-8943-840CFC270C12",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "DC421397-73D3-4D03-B918-9BDCCD8F4414",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.2745881410781151,
              0.11381584489294418,
              0.058863106348475046,
              1
            ],
            geometry: "8FAEAA90-F016-403D-AB39-A4E43BCD531D",
            material: "88ACB93F-75D3-4D85-8321-4AFAA1579DAB",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "311998E3-1A7C-45BD-BA9A-444372ED5C72",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.31998179710388003,
              0.11546868403028636,
              0.08416324356684401,
              1
            ],
            geometry: "CC268597-6B01-4968-90F7-DC39BEC68386",
            material: "CBAA9FD1-3AC4-4CAB-878C-D14F28A844C3",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "CDEC08CA-AC52-4256-971C-BFF276E61835",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.31998179710388003,
              0.11546868403028636,
              0.08416324356684401,
              1
            ],
            geometry: "0F5DD412-B720-42E8-BF9C-BE3F1A8CB1FB",
            material: "4BA22165-56F4-4F4E-BB05-2B210443BFE6",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "46BE0804-F8D5-4959-8F9A-936AD23F450A",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.37581632271359094,
              0.12103919359095933,
              0.14135790285434816,
              1
            ],
            geometry: "7D22858B-3903-4A11-9921-B14673458C06",
            material: "9A1EC624-2F6E-4454-8D76-2B9B4B3A206F",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "C797F93F-C660-477A-8719-C26109C06840",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.3961112101491065,
              0.1248553006612227,
              0.1741267312550973,
              1
            ],
            geometry: "EF64DAD7-F195-44B3-B7B5-8561CE403CB5",
            material: "6CED2AF4-5019-4EA6-B382-E7FD04E315AC",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "9F6546A4-2ABB-4571-8274-381F07B1DD59",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.4124931637814927,
              0.12776449118000943,
              0.20779639618383458,
              1
            ],
            geometry: "E519979C-4673-4761-B3E9-AA8E1E3213CA",
            material: "E932D322-CDB1-4446-9947-5E3CBB8BDD9D",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "1671BADB-169C-4731-B9DC-1FE8C81E905E",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.42531958240460804,
              0.13012790756428033,
              0.24333027803601673,
              1
            ],
            geometry: "2034AD17-3543-4D3A-9B8C-8395CC28E98F",
            material: "34408E8E-5DF2-4999-87F0-D1AD0C118582",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "1C3CE2CA-48FE-47F2-8721-8E35D4D75E5D",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.42531958240460804,
              0.13012790756428033,
              0.24333027803601673,
              1
            ],
            geometry: "4039B61B-81D4-471F-A9AF-4DA3DCF46BC2",
            material: "87F6C0F2-E995-439F-9123-1E65B97970F3",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "5EF9D40A-6A3F-4D19-A2FD-75A157409316",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.43829076673843614,
              0.13032872526436617,
              0.309732107400004,
              1
            ],
            geometry: "65ED1103-CD24-4B10-97F3-2B38A1941391",
            material: "0BDD450F-14DD-44CF-BE4F-2C472251A1F4",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "1C8C54CE-E7F4-4709-B636-2A282E2956B9",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.43861965765699923,
              0.12918672708596754,
              0.3382631955872833,
              1
            ],
            geometry: "C3A9E966-ED78-4CEB-A017-006BF016B716",
            material: "F22757FA-6CF2-486B-8941-276DD2E945AB",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "5DDC2B1F-348F-4407-979E-3AB7C672DF46",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.43793400411969063,
              0.12767666046710693,
              0.3733758939103511,
              1
            ],
            geometry: "4062D352-148A-4383-83C1-4F108FF20C82",
            material: "D15195B1-E4B2-4B56-AA14-43E9F4F9763E",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "A1DCB3B4-5914-4AA7-9C94-2A217033F78C",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.4294391289826665,
              0.12639722065447484,
              0.40596462729763255,
              1
            ],
            geometry: "D1A2ABC4-118C-4A13-9976-4BC46FFFC19B",
            material: "3D2C4825-C510-4640-B1AB-C8FC2BC20060",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "A6CD576A-D594-4B9C-8CF7-9087C28A1EE2",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.42009399344097526,
              0.12453761987579919,
              0.43594267326924274,
              1
            ],
            geometry: "6B62CFBB-34C0-45EC-A14E-E77A9A48D4A1",
            material: "57BFFC18-5AF3-446D-AF36-9A01327F46E7",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "C78907BC-087B-4667-BB14-A71730C1393E",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.40555762747836055,
              0.12335687198151665,
              0.474216135756938,
              1
            ],
            geometry: "E8D581CF-9B56-4A8B-9EE9-97F21995FA96",
            material: "C3229156-3298-4E71-9694-09753CDF8E1C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "0F5D45C8-BC77-42B7-8D4D-F559D5074C74",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.3884137552695869,
              0.12091294146051879,
              0.5012719011231226,
              1
            ],
            geometry: "35C5C481-EAC7-40AC-969A-BC16C7FCDA56",
            material: "A821BB64-E636-4970-A1A7-8DD527D116F2",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "A02DC626-3009-4599-913F-C3620B1E6DDE",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.3680864488380556,
              0.11890193214184826,
              0.5252968736820289,
              1
            ],
            geometry: "A301EF7E-7C80-4C21-981C-E38BBA2AED2B",
            material: "C70BF5F1-ADBF-4524-A55B-B808959133C0",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "0376DCE1-BD1B-4865-A0B1-1184732257F9",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.013479664529247893,
              -0.016051451933736596,
              0.06546562943684067,
              1
            ],
            geometry: "6A95524D-BD24-4466-99A8-67539049D448",
            material: "FB252F89-BE66-4B89-B298-EA17E1BC002F",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "95A100D2-5233-4511-A28F-727C016A38D3",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.016793095577935728,
              -0.019758983339193518,
              0.062007917783821,
              1
            ],
            geometry: "C810CBA3-5367-4166-9F76-9D4D74203D9C",
            material: "FA05529F-7556-4744-A0DF-0DA555117C2F",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "E2055301-119F-455F-AB8D-7A6AD91B5982",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.03687988147511049,
              -0.04686418203732565,
              0.04326300432417165,
              1
            ],
            geometry: "10E4C829-1EC7-4B57-A37D-81323950C2AA",
            material: "AB2E584A-79EB-45B3-B234-E1F57D630D81",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "879E4D05-F008-44DE-9E67-1913277FF5B9",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.03687988147511049,
              -0.04686418203732565,
              0.04326300432417165,
              1
            ],
            geometry: "C1867290-D002-4D3B-932B-CF0D94C33387",
            material: "D31E42AB-1D4E-4EED-B419-CEB407C642D7",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "0DDFDA2C-FAD7-47CE-8543-B4365EDFCC6A",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.04821490650542698,
              -0.04732715655240944,
              0.03135781497437885,
              1
            ],
            geometry: "5D9E38B1-CCDB-4ACC-A7A1-14485160FE67",
            material: "FC20A65F-4670-4002-A14C-DE23164FDEC7",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "DFEE2626-CF42-41A8-B3F1-A3109246ABDF",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.04821490650542698,
              -0.04732715655240944,
              0.03135781497437885,
              1
            ],
            geometry: "E0BD5398-9AE0-4E5B-AE11-17D8544821EC",
            material: "94A4210B-3483-4A09-B58A-C0CB35D8921C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "FA81F5E2-B817-4774-AC48-A68C370B133F",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.05216942507172037,
              -0.026818013484294915,
              0.029757781183353604,
              1
            ],
            geometry: "4D0D4594-5E6A-4382-B271-FD43A8311213",
            material: "035AF2CE-475F-429D-845C-BECDE3A78E0C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "E7E72CCF-6CD6-473E-B570-9B7431FDBEEA",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.0552276476936572,
              -0.006097376185464062,
              0.03058906753741517,
              1
            ],
            geometry: "538312F7-5636-4F29-83EE-A94A7C276977",
            material: "3D86EF2A-079F-4372-9148-C826C9400F1E",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "8DA5EC10-D407-4A54-AB24-68FEF14E07C0",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.0540875886506813,
              0.06330553908968546,
              0.04278570610197286,
              1
            ],
            geometry: "CE68F03D-E5BF-4D39-AF2E-2663A515523D",
            material: "E0053C4F-B153-451F-827A-50DBCEDEA095",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "8C40EF9C-1CFF-469C-B7FC-B3B73CFEAE07",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.05119125783335122,
              0.1049566837291478,
              0.05248858337010469,
              1
            ],
            geometry: "F923C70B-5B93-43C5-931C-A0C4AF4990CD",
            material: "E29D913F-DD97-431A-BC15-65A841A42141",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "708C0C74-0AEC-471B-9C18-BC6EC0AA376A",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.046594294946156536,
              0.1479735555186666,
              0.06493510683873974,
              1
            ],
            geometry: "1A2376E2-2B99-49F8-BDD5-B5789F1951EC",
            material: "0DD64321-748C-46A6-8DE4-59BE02836CD0",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "FD34B1C4-C378-4E68-8090-A22358FD840F",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.03930321901057863,
              0.19079690505793204,
              0.08149454743958646,
              1
            ],
            geometry: "2589CEEC-543A-49E1-9BC7-E51E3CB33D52",
            material: "C19A6164-51B4-4C30-8FBF-512B36953934",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "56052409-41CC-4B0A-951B-BB2DB7E2A182",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.03205692439054573,
              0.22935951252349782,
              0.09536309789055922,
              1
            ],
            geometry: "7755762C-8A0E-41D8-A135-3B603ED5F8C3",
            material: "1156AD72-679A-4C0D-9158-8993D1E96D2A",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "F280131C-27A2-41A6-947E-CC028382793E",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.01738846900402726,
              0.26958920721675145,
              0.10993109209269653,
              1
            ],
            geometry: "C9E0FACE-BD6F-406A-BB4D-C2844F46333D",
            material: "19D4AEB7-7594-45E3-BC92-EA17D9DCD9F5",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "6828C1B7-EAD3-4E7E-BAE8-47939D62E4F9",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.005274144749327603,
              0.31814379023839856,
              0.13225122574693676,
              1
            ],
            geometry: "068649CE-29A5-4C2B-9DF8-F8FF8A33AF3E",
            material: "BF949A2D-99D0-49A7-8208-D517AD2C2C11",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "4C1AB332-8062-4851-82C5-CEF6B195C666",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.005274144749327603,
              0.31814379023839856,
              0.13225122574693676,
              1
            ],
            geometry: "ECE0414A-414F-4E62-9ED7-73A3DBF8FEDF",
            material: "29CE2C72-6FD8-473F-A606-73B83AD4DECF",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "F326C69F-923B-4C3A-BB9E-5B1954806525",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.049410628400761616,
              0.38801799156028155,
              0.17605576280870167,
              1
            ],
            geometry: "1BA55390-8F48-43EE-8709-02B4B1552A5E",
            material: "1C6BEF8C-D98A-4866-8677-5949CEABC560",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "BAF7F50B-D70A-47D1-ABBD-C6944C3DB15E",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.05471796057168254,
              0.395936673887293,
              0.18139623836936677,
              1
            ],
            geometry: "DC75DB48-6498-470D-BB9F-B6CF35EB0CF4",
            material: "4A1913A3-0385-4311-9B0D-E808AA5B6F83",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "A18C7B30-9CC1-4943-A976-ABE466A9DCAF",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.09201336993714805,
              0.4413955329997861,
              0.22075357561372497,
              1
            ],
            geometry: "425483DD-9D2A-4325-97F1-1069D03CB6B2",
            material: "333674F6-BCC4-4CAB-9C0B-38D0A0825885",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "8888DCE4-E183-437B-BB11-A44BE259F1C1",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.11218368533046817,
              0.4635788905659013,
              0.2435098172908996,
              1
            ],
            geometry: "EA04D197-75EE-4496-928D-907AC2459F9E",
            material: "E48E7D57-36EF-4AA6-A568-15D383EBD611",
            castShadow: true
          }
        ],
        background: {
          name: "",
          uuid: "16118C56-E3D4-4031-919C-B2501A67FA50",
          wrap: [1001, 1001],
          flipY: true,
          center: [0, 0],
          format: 1023,
          offset: [0, 0],
          repeat: [1, 1],
          mapping: 300,
          metadata: {
            type: "Texture",
            version: 4.5,
            generator: "Texture.toJSON"
          },
          rotation: 0,
          magFilter: 1006,
          minFilter: 1008,
          anisotropy: 1
        }
      },
      metadata: { type: "Object", version: 4.5, generator: "Object3D.toJSON" },
      materials: [
        {
          type: "MeshBasicMaterial",
          uuid: "70A4E955-DD8D-4532-AB97-6517B9D31AD3",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "A1BE37E2-BDCA-4B3E-B973-D18E61BE4EF2",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "0B9DA8AC-0D30-4B78-9FA9-D055C47F11E9",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "459A0F02-9A76-4B14-BCB5-843D4FE9D95B",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "23FA1AB1-CF11-4037-820E-B4919F707282",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E380495F-B0F2-4245-9710-9057EDD6436D",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "574A4707-0CEC-424C-94DF-81810464A72C",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "F670E338-762B-4191-99F8-70C2B05D8DFA",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "1B876164-9E19-4AD2-A091-48BF004E769C",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "9CE40FA2-9612-46B7-B9F6-7F6B610020E1",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "9FA7755C-6A07-4E89-B8FA-ED3F4743E67F",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "38767B2A-8884-4E68-BBB3-0812EC807E6D",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "5FE775A5-519F-418F-B205-4B9BD495BCB7",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "C6A98C78-B79F-421D-9571-DEC65DF9D14E",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "54D1D3BF-CED9-433D-9AD0-80D91048D703",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "3D0B729C-A2AB-4F2B-8943-840CFC270C12",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "88ACB93F-75D3-4D85-8321-4AFAA1579DAB",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "CBAA9FD1-3AC4-4CAB-878C-D14F28A844C3",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "4BA22165-56F4-4F4E-BB05-2B210443BFE6",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "9A1EC624-2F6E-4454-8D76-2B9B4B3A206F",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "6CED2AF4-5019-4EA6-B382-E7FD04E315AC",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E932D322-CDB1-4446-9947-5E3CBB8BDD9D",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "34408E8E-5DF2-4999-87F0-D1AD0C118582",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "87F6C0F2-E995-439F-9123-1E65B97970F3",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "0BDD450F-14DD-44CF-BE4F-2C472251A1F4",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "F22757FA-6CF2-486B-8941-276DD2E945AB",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "D15195B1-E4B2-4B56-AA14-43E9F4F9763E",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "3D2C4825-C510-4640-B1AB-C8FC2BC20060",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "57BFFC18-5AF3-446D-AF36-9A01327F46E7",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "C3229156-3298-4E71-9694-09753CDF8E1C",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "A821BB64-E636-4970-A1A7-8DD527D116F2",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "C70BF5F1-ADBF-4524-A55B-B808959133C0",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "FB252F89-BE66-4B89-B298-EA17E1BC002F",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "FA05529F-7556-4744-A0DF-0DA555117C2F",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "AB2E584A-79EB-45B3-B234-E1F57D630D81",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "D31E42AB-1D4E-4EED-B419-CEB407C642D7",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "FC20A65F-4670-4002-A14C-DE23164FDEC7",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "94A4210B-3483-4A09-B58A-C0CB35D8921C",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "035AF2CE-475F-429D-845C-BECDE3A78E0C",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "3D86EF2A-079F-4372-9148-C826C9400F1E",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E0053C4F-B153-451F-827A-50DBCEDEA095",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E29D913F-DD97-431A-BC15-65A841A42141",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "0DD64321-748C-46A6-8DE4-59BE02836CD0",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "C19A6164-51B4-4C30-8FBF-512B36953934",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "1156AD72-679A-4C0D-9158-8993D1E96D2A",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "19D4AEB7-7594-45E3-BC92-EA17D9DCD9F5",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "BF949A2D-99D0-49A7-8208-D517AD2C2C11",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "29CE2C72-6FD8-473F-A606-73B83AD4DECF",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "1C6BEF8C-D98A-4866-8677-5949CEABC560",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "4A1913A3-0385-4311-9B0D-E808AA5B6F83",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "333674F6-BCC4-4CAB-9C0B-38D0A0825885",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E48E7D57-36EF-4AA6-A568-15D383EBD611",
          color: 101630,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        }
      ],
      geometries: [
        {
          type: "TetrahedronBufferGeometry",
          uuid: "F5F9736F-1CF7-4140-9493-23DA9716CC68",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "4D1CBDB7-ACDA-4994-884F-63C17514E366",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "97CC2264-8F05-4E50-B35F-1D81A7719A67",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "40D0776A-94D3-4EF3-B449-BA27B7CB8606",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "BD41D3FB-B853-4A91-9FFD-8675FBC0E6F7",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "56CA7FF9-25EB-45F7-904D-E8A8950E684D",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "1CB3EA02-B857-4AE3-9F89-465E70AC9774",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "D3B88973-3963-40F2-9B12-02EB9E939455",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "6953A502-F509-4902-9FC9-AA550BED954B",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "782F6293-E5EA-49FF-A56C-59B4C1FEF54A",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "5D2D80A2-CE26-45E9-AA5B-70B8D2220E5B",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "D58DB731-6E85-4F17-9113-D4CACA66F65C",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "568441BE-4C08-4B5B-ABF9-F968CA23E5B6",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "239738CD-9FE3-4D01-A608-17A35804C28E",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "45DC6AEA-BE69-41A9-AAC6-3EEABCBF3220",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "72C4A328-8A78-412C-9B6A-5D511AAC5F7D",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "8FAEAA90-F016-403D-AB39-A4E43BCD531D",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "CC268597-6B01-4968-90F7-DC39BEC68386",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "0F5DD412-B720-42E8-BF9C-BE3F1A8CB1FB",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "7D22858B-3903-4A11-9921-B14673458C06",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "EF64DAD7-F195-44B3-B7B5-8561CE403CB5",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "E519979C-4673-4761-B3E9-AA8E1E3213CA",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "2034AD17-3543-4D3A-9B8C-8395CC28E98F",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "4039B61B-81D4-471F-A9AF-4DA3DCF46BC2",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "65ED1103-CD24-4B10-97F3-2B38A1941391",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "C3A9E966-ED78-4CEB-A017-006BF016B716",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "4062D352-148A-4383-83C1-4F108FF20C82",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "D1A2ABC4-118C-4A13-9976-4BC46FFFC19B",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "6B62CFBB-34C0-45EC-A14E-E77A9A48D4A1",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "E8D581CF-9B56-4A8B-9EE9-97F21995FA96",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "35C5C481-EAC7-40AC-969A-BC16C7FCDA56",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "A301EF7E-7C80-4C21-981C-E38BBA2AED2B",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "6A95524D-BD24-4466-99A8-67539049D448",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "C810CBA3-5367-4166-9F76-9D4D74203D9C",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "10E4C829-1EC7-4B57-A37D-81323950C2AA",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "C1867290-D002-4D3B-932B-CF0D94C33387",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "5D9E38B1-CCDB-4ACC-A7A1-14485160FE67",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "E0BD5398-9AE0-4E5B-AE11-17D8544821EC",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "4D0D4594-5E6A-4382-B271-FD43A8311213",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "538312F7-5636-4F29-83EE-A94A7C276977",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "CE68F03D-E5BF-4D39-AF2E-2663A515523D",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "F923C70B-5B93-43C5-931C-A0C4AF4990CD",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "1A2376E2-2B99-49F8-BDD5-B5789F1951EC",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "2589CEEC-543A-49E1-9BC7-E51E3CB33D52",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "7755762C-8A0E-41D8-A135-3B603ED5F8C3",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "C9E0FACE-BD6F-406A-BB4D-C2844F46333D",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "068649CE-29A5-4C2B-9DF8-F8FF8A33AF3E",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "ECE0414A-414F-4E62-9ED7-73A3DBF8FEDF",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "1BA55390-8F48-43EE-8709-02B4B1552A5E",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "DC75DB48-6498-470D-BB9F-B6CF35EB0CF4",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "425483DD-9D2A-4325-97F1-1069D03CB6B2",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "EA04D197-75EE-4496-928D-907AC2459F9E",
          detail: 0,
          radius: 0.025
        }
      ]
    }
  },
  {
    artistId: 4,
    description: "Art better than the mona lisa",
    title: "Leaning tower of AR",
    location: [40.70922922853889, -74.00780365188648],
    coverPhoto:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/images%2F13?alt=media&token=badec7fa-64b4-44e2-b00b-c1e40c4564ce",
    likes: 7,
    artPiece: {
      object: {
        type: "Scene",
        uuid: "7D9E5688-88E8-49C7-8622-3E803CDB156F",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        children: [
          {
            type: "Mesh",
            uuid: "C8EF2FA2-31B2-496B-A2E3-48A06342DE58",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.1981497785207036,
              0.19748479759712825,
              -0.000626299274012946,
              1
            ],
            geometry: "13EC614A-1C8A-4CBC-994E-6078228D1C8F",
            material: "A999120E-F218-41D3-98D9-F188822D4238",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "AD16FF8A-3F37-43D5-969F-46E428C85BAD",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.19865493883621518,
              0.19713648302847744,
              -0.0007014767971186152,
              1
            ],
            geometry: "0087A405-1AB5-442C-8343-50A6DF92D1E5",
            material: "E39D7569-F3CB-4925-8B5F-14D3AC8A69B0",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "FA464493-73DD-4EB2-A7DE-9B9F60CEDC32",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.2007102622053442,
              0.1954560574755616,
              -0.0013874658870754706,
              1
            ],
            geometry: "F22BB240-6DB8-4212-B1A9-49D5A06E932A",
            material: "3A595EEA-E8C7-494B-BB16-FA407BCC91FC",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "66688F0A-0608-4AAC-A64F-68762F5613D8",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.1852953331584019,
              0.20849860221438027,
              0.016492896406937012,
              1
            ],
            geometry: "2090463C-78E6-40F5-BB71-47C9927B9620",
            material: "8B47DCE5-7224-4539-B826-2722E3E45C2F",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "42069872-569C-4D0B-AD2E-78382273FB92",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.18483811308207712,
              0.2083984983785071,
              0.01653066309192138,
              1
            ],
            geometry: "44AE4449-DF0A-45AE-8CA5-E584EDD35F68",
            material: "22246771-71CC-4B59-97D7-549794D63176",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "3EBA968F-D269-4EF3-AA66-2883B3E9F8A7",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.18453776386873835,
              0.20739071719068353,
              0.015993943928982818,
              1
            ],
            geometry: "EDBEF8F7-D64F-4704-96A0-BCA147EFC8A8",
            material: "0B8693D4-BCB0-4B91-A62D-42BDFB23D24D",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "C592A016-D2ED-4D8B-AE90-E34B0CF2AF98",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.1720211288623933,
              0.19709436735037175,
              0.02834908107256392,
              1
            ],
            geometry: "73DA9344-AD9F-4149-A756-B03DEC716599",
            material: "32ADC640-D402-4699-9BF1-6D903C09E18D",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "B21F3FE9-DA34-4F92-8D0C-0A07C47FC9E4",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.1734019344281204,
              0.19571881750314718,
              0.026641801802134945,
              1
            ],
            geometry: "C187BA39-2C5C-40AF-B6EB-8293F1332C6D",
            material: "EE1C346D-15AE-466E-A15B-6D69DCD2BD00",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "3E493F8C-9A1A-41FC-A4A5-BBCF41AB9BA5",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.17483428121818423,
              0.19202714962232778,
              0.023140251972270858,
              1
            ],
            geometry: "5AB7332D-8574-4062-94C0-1E60A05835BB",
            material: "70BFD31C-610E-4AA1-B35E-EACC57602F5B",
            castShadow: true
          }
        ],
        background: {
          name: "",
          uuid: "797948B7-B72F-4610-93D1-D8983BA367C2",
          wrap: [1001, 1001],
          flipY: true,
          center: [0, 0],
          format: 1023,
          offset: [0, 0],
          repeat: [1, 1],
          mapping: 300,
          metadata: {
            type: "Texture",
            version: 4.5,
            generator: "Texture.toJSON"
          },
          rotation: 0,
          magFilter: 1006,
          minFilter: 1008,
          anisotropy: 1
        }
      },
      metadata: { type: "Object", version: 4.5, generator: "Object3D.toJSON" },
      materials: [
        {
          type: "MeshBasicMaterial",
          uuid: "A999120E-F218-41D3-98D9-F188822D4238",
          color: 14713631,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E39D7569-F3CB-4925-8B5F-14D3AC8A69B0",
          color: 14713631,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "3A595EEA-E8C7-494B-BB16-FA407BCC91FC",
          color: 14713631,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "8B47DCE5-7224-4539-B826-2722E3E45C2F",
          color: 1566872,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "22246771-71CC-4B59-97D7-549794D63176",
          color: 1566872,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "0B8693D4-BCB0-4B91-A62D-42BDFB23D24D",
          color: 1566872,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "32ADC640-D402-4699-9BF1-6D903C09E18D",
          color: 269819,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "EE1C346D-15AE-466E-A15B-6D69DCD2BD00",
          color: 269819,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "70BFD31C-610E-4AA1-B35E-EACC57602F5B",
          color: 269819,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        }
      ],
      geometries: [
        {
          type: "BoxGeometry",
          uuid: "13EC614A-1C8A-4CBC-994E-6078228D1C8F",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "0087A405-1AB5-442C-8343-50A6DF92D1E5",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "F22BB240-6DB8-4212-B1A9-49D5A06E932A",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "2090463C-78E6-40F5-BB71-47C9927B9620",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "44AE4449-DF0A-45AE-8CA5-E584EDD35F68",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "EDBEF8F7-D64F-4704-96A0-BCA147EFC8A8",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "73DA9344-AD9F-4149-A756-B03DEC716599",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "C187BA39-2C5C-40AF-B6EB-8293F1332C6D",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "5AB7332D-8574-4062-94C0-1E60A05835BB",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        }
      ]
    }
  },
  {
    artistId: 1,
    description: "Amazing art, check it out",
    title: "Sistine Chapel",
    location: [40.70922922853889, -74.00780365188648],
    coverPhoto:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/images%2F14?alt=media&token=283c86df-a69d-4ac0-b69e-19274e9ce60b",
    likes: 6,
    artPiece: {
      object: {
        type: "Scene",
        uuid: "7D9E5688-88E8-49C7-8622-3E803CDB156F",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        children: [
          {
            type: "Mesh",
            uuid: "05B51EE8-79EB-4721-8501-4BB3C151DF50",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.27522909942482654,
              0.3591807770778692,
              0.09083061429079449,
              1
            ],
            geometry: "C1BE8A4B-CE88-487E-9382-35D92C58C3C6",
            material: "715537FD-04B5-489A-A236-FFDB170E93B4",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "B3313A36-3978-4793-B5AA-0B788B1252C2",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.15590343190251904,
              0.5229697764664089,
              0.08782896195310223,
              1
            ],
            geometry: "9A3B0EAA-DCD7-4CDC-8000-3C84763095B8",
            material: "E69102E4-8977-4FDF-B125-DAC6E88BF32A",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "836D1317-6E30-46EA-A04C-0717E8D2B6E4",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.2263012385642383,
              0.5580343602092429,
              0.27155735866092456,
              1
            ],
            geometry: "6C268937-8388-4449-B38D-23C58F0BE13A",
            material: "192C4BB9-0C30-4496-B78D-3AE825853F3C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "040D4E10-FD5E-4B7B-B825-F6F19A78DDF5",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.0822287019130927,
              0.45452812550262345,
              0.2754516585420708,
              1
            ],
            geometry: "1E8CF307-B5D0-423F-8C64-072910AC943C",
            material: "B2349C31-25E2-4785-920B-A6067172C66B",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "38FF20E9-EBA9-43B2-A893-E70B3FBC1F4E",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.03804700217164785,
              0.5542688632400138,
              0.5987025596959048,
              1
            ],
            geometry: "FE61CD3E-C358-487F-A1F0-64449D18C562",
            material: "F0C8A5D1-9308-408E-B659-54456AED39E2",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "2C50FBD2-FC50-4B09-B610-8B3C670525B1",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.15538009756346702,
              0.5681426776694849,
              0.5953641740278834,
              1
            ],
            geometry: "4112614D-03EC-4E9E-B239-B77070FF60CC",
            material: "9B11A179-C200-48F9-9C0C-A0ACEB0C840D",
            castShadow: true
          }
        ],
        background: {
          name: "",
          uuid: "797948B7-B72F-4610-93D1-D8983BA367C2",
          wrap: [1001, 1001],
          flipY: true,
          center: [0, 0],
          format: 1023,
          offset: [0, 0],
          repeat: [1, 1],
          mapping: 300,
          metadata: {
            type: "Texture",
            version: 4.5,
            generator: "Texture.toJSON"
          },
          rotation: 0,
          magFilter: 1006,
          minFilter: 1008,
          anisotropy: 1
        }
      },
      metadata: { type: "Object", version: 4.5, generator: "Object3D.toJSON" },
      materials: [
        {
          type: "MeshBasicMaterial",
          uuid: "715537FD-04B5-489A-A236-FFDB170E93B4",
          color: 9697032,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E69102E4-8977-4FDF-B125-DAC6E88BF32A",
          color: 9697032,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "192C4BB9-0C30-4496-B78D-3AE825853F3C",
          color: 9697032,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "B2349C31-25E2-4785-920B-A6067172C66B",
          color: 9697032,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "F0C8A5D1-9308-408E-B659-54456AED39E2",
          color: 9697032,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "9B11A179-C200-48F9-9C0C-A0ACEB0C840D",
          color: 9697032,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        }
      ],
      geometries: [
        {
          type: "SphereGeometry",
          uuid: "C1BE8A4B-CE88-487E-9382-35D92C58C3C6",
          radius: 0.025,
          widthSegments: 64,
          heightSegments: 64
        },
        {
          type: "SphereGeometry",
          uuid: "9A3B0EAA-DCD7-4CDC-8000-3C84763095B8",
          radius: 0.025,
          widthSegments: 64,
          heightSegments: 64
        },
        {
          type: "SphereGeometry",
          uuid: "6C268937-8388-4449-B38D-23C58F0BE13A",
          radius: 0.025,
          widthSegments: 64,
          heightSegments: 64
        },
        {
          type: "SphereGeometry",
          uuid: "1E8CF307-B5D0-423F-8C64-072910AC943C",
          radius: 0.025,
          widthSegments: 64,
          heightSegments: 64
        },
        {
          type: "SphereGeometry",
          uuid: "FE61CD3E-C358-487F-A1F0-64449D18C562",
          radius: 0.025,
          widthSegments: 64,
          heightSegments: 64
        },
        {
          type: "SphereGeometry",
          uuid: "4112614D-03EC-4E9E-B239-B77070FF60CC",
          radius: 0.025,
          widthSegments: 64,
          heightSegments: 64
        }
      ]
    }
  },
  {
    artistId: 2,
    description: "best thing youll ever see for real",
    title: "The Creation Of Adam",
    location: [40.70922922853889, -74.00780365188648],
    coverPhoto:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/images%2F15?alt=media&token=c503212a-dc33-4c44-bbb7-26ad9af4f160",
    likes: 2,
    artPiece: {
      object: {
        type: "Scene",
        uuid: "7D9E5688-88E8-49C7-8622-3E803CDB156F",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        children: [
          {
            type: "Mesh",
            uuid: "73F47286-AFC7-433C-B368-A4FB525F15E4",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.5179118420870911,
              0.3806959718856534,
              0.3885744150701245,
              1
            ],
            geometry: "8E6E5D88-546A-4EB1-8730-4180F546FCA7",
            material: "5EDED373-FAE0-4146-A3AF-CE81AADE31BD",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "72F99DAF-C88E-494F-9B68-A344986E7A5B",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.5173246011388941,
              0.37973049426084576,
              0.3880731281568975,
              1
            ],
            geometry: "5299B45E-7333-4815-BE62-204E5D0328F0",
            material: "4BC3F843-FD32-4926-ACC2-3B05C4B71B61",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "EE3D736E-29F7-4847-BC52-D08DB950DFCC",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.4924628956292213,
              0.3764629384805684,
              0.3535753529228326,
              1
            ],
            geometry: "FE6B9106-A6EF-4B50-B56C-FC4664FE96D3",
            material: "7B3D6D15-783F-4B71-ACAE-20A18E8DE472",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "3191362D-02E7-4280-8CBA-16B7A08510A8",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.4924628956292213,
              0.3764629384805684,
              0.3535753529228326,
              1
            ],
            geometry: "BAF4299D-0D8B-4830-A3F6-992D246F9FD1",
            material: "8B8D5CF7-DF36-4371-8A13-728F72DBA28D",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "9C4891D2-26E8-4AA7-854E-84158A36505F",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.5304907484640204,
              0.49282187297135877,
              0.3591294774860555,
              1
            ],
            geometry: "CE37C83B-E268-4F46-BBE3-8591DC4A8FB9",
            material: "0482EB88-4EF4-4E40-962F-A0B58E55CA5A",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "27F90CF1-8DC3-43E1-B262-7E5B19D6A0B3",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.5304907484640204,
              0.49282187297135877,
              0.3591294774860555,
              1
            ],
            geometry: "8841A767-031C-4143-8C9A-0AA29478195E",
            material: "252E6A62-09F8-46BE-874D-2F4DA494DFA2",
            castShadow: true
          }
        ],
        background: {
          name: "",
          uuid: "797948B7-B72F-4610-93D1-D8983BA367C2",
          wrap: [1001, 1001],
          flipY: true,
          center: [0, 0],
          format: 1023,
          offset: [0, 0],
          repeat: [1, 1],
          mapping: 300,
          metadata: {
            type: "Texture",
            version: 4.5,
            generator: "Texture.toJSON"
          },
          rotation: 0,
          magFilter: 1006,
          minFilter: 1008,
          anisotropy: 1
        }
      },
      metadata: { type: "Object", version: 4.5, generator: "Object3D.toJSON" },
      materials: [
        {
          type: "MeshBasicMaterial",
          uuid: "5EDED373-FAE0-4146-A3AF-CE81AADE31BD",
          color: 2692076,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "4BC3F843-FD32-4926-ACC2-3B05C4B71B61",
          color: 2692076,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "7B3D6D15-783F-4B71-ACAE-20A18E8DE472",
          color: 9135769,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "8B8D5CF7-DF36-4371-8A13-728F72DBA28D",
          color: 9135769,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "0482EB88-4EF4-4E40-962F-A0B58E55CA5A",
          color: 13815085,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "252E6A62-09F8-46BE-874D-2F4DA494DFA2",
          color: 13815085,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        }
      ],
      geometries: [
        {
          type: "TetrahedronBufferGeometry",
          uuid: "8E6E5D88-546A-4EB1-8730-4180F546FCA7",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "5299B45E-7333-4815-BE62-204E5D0328F0",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "FE6B9106-A6EF-4B50-B56C-FC4664FE96D3",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "BAF4299D-0D8B-4830-A3F6-992D246F9FD1",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "CE37C83B-E268-4F46-BBE3-8591DC4A8FB9",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "8841A767-031C-4143-8C9A-0AA29478195E",
          detail: 0,
          radius: 0.025
        }
      ]
    }
  },
  {
    artistId: 3,
    description: "Check out my cool art",
    title: "The Birth of Venus",
    location: [40.70922922853889, -74.00780365188648],
    coverPhoto:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/images%2F16?alt=media&token=16e62ee8-c19d-4efa-a7ca-36ca3bd0e1de",
    likes: 4,
    artPiece: {
      object: {
        type: "Scene",
        uuid: "7D9E5688-88E8-49C7-8622-3E803CDB156F",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        children: [
          {
            type: "Mesh",
            uuid: "B135511B-8901-4D22-AF0B-31DF537FF3F6",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.5077018889645745,
              0.37024482887834687,
              0.3409974164991285,
              1
            ],
            geometry: "A5725130-91E9-416E-8A4D-C69041255A5D",
            material: "457F4255-5559-4227-BA04-DD9E166E584C",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "C650C3FA-9A5D-4D8A-9C63-392BE8C33ED3",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.4249873510953978,
              0.37759060306289266,
              0.23143581473476713,
              1
            ],
            geometry: "92D90FB8-B0B7-4718-8129-04A828176F86",
            material: "09B0D8A9-BAB8-4D14-88F1-F16EF7DF75FA",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "7F48A1E7-87C7-4C04-80B7-3DDDD620DB1E",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.31109842888279843,
              0.602253853862137,
              0.14340438057977567,
              1
            ],
            geometry: "8DB57E59-737E-4D53-A63F-5BBEB09B03B1",
            material: "E95993C7-6696-47DD-AFC0-E3246F25D79A",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "5BDFE3AC-F5F0-4596-8BED-BD2647F3B61F",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.23078446649287523,
              0.41975514765474553,
              0.12707688119618168,
              1
            ],
            geometry: "FF67C666-A003-4D66-A817-22007CF0D9C7",
            material: "926A663F-73AF-4871-97BF-6C0BF77CA6D3",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "7C259552-7C80-4BBC-A37B-932AF4218E2D",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.31362533886947686,
              0.2860833365542813,
              0.27961748380848767,
              1
            ],
            geometry: "F1212665-9091-4072-88C5-0036429D568A",
            material: "EFB2FEB3-2A6F-4590-BE84-865655EB3F4E",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "16905D65-049A-4731-9FF0-03D59C4AE5A1",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.09194388836315857,
              0.2961249154840148,
              0.13526631634800376,
              1
            ],
            geometry: "673882F6-2889-4DDE-A235-7DB640BB7D69",
            material: "47A7E58A-C327-40DF-8860-61F1AC2851EC",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "5A3AC3B6-D350-40D2-8D72-494F9B354CF8",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.1893645050434592,
              0.43852836106282406,
              0.46031944470991326,
              1
            ],
            geometry: "75A4DFBC-A137-4B48-B1BC-B54DACA42ED7",
            material: "00805033-A7FA-4B4C-A39A-341AA0269C28",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "D659DE4F-057C-4029-AB8E-E8C1E4497399",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.001546389199616059,
              0.38952052752796246,
              0.7331773684913007,
              1
            ],
            geometry: "9F612113-9D57-48E9-8A14-9EE82F66B111",
            material: "B5D58D37-5658-44FC-86A7-42E25BE11D37",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "322EC5EF-36AE-4D2F-8F90-8AA23AC6F60F",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.001546389199616059,
              0.38952052752796246,
              0.7331773684913007,
              1
            ],
            geometry: "3FF3FE46-EFA2-40BE-8CED-BA5A834B4736",
            material: "B50A5AA8-A06A-4F68-A2E4-502386B4BBA9",
            castShadow: true
          }
        ],
        background: {
          name: "",
          uuid: "797948B7-B72F-4610-93D1-D8983BA367C2",
          wrap: [1001, 1001],
          flipY: true,
          center: [0, 0],
          format: 1023,
          offset: [0, 0],
          repeat: [1, 1],
          mapping: 300,
          metadata: {
            type: "Texture",
            version: 4.5,
            generator: "Texture.toJSON"
          },
          rotation: 0,
          magFilter: 1006,
          minFilter: 1008,
          anisotropy: 1
        }
      },
      metadata: { type: "Object", version: 4.5, generator: "Object3D.toJSON" },
      materials: [
        {
          type: "MeshBasicMaterial",
          uuid: "457F4255-5559-4227-BA04-DD9E166E584C",
          color: 9754153,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "09B0D8A9-BAB8-4D14-88F1-F16EF7DF75FA",
          color: 9754153,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "E95993C7-6696-47DD-AFC0-E3246F25D79A",
          color: 9754153,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "926A663F-73AF-4871-97BF-6C0BF77CA6D3",
          color: 9754153,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "EFB2FEB3-2A6F-4590-BE84-865655EB3F4E",
          color: 9754153,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "47A7E58A-C327-40DF-8860-61F1AC2851EC",
          color: 4786933,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "00805033-A7FA-4B4C-A39A-341AA0269C28",
          color: 4786933,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "B5D58D37-5658-44FC-86A7-42E25BE11D37",
          color: 4786933,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "B50A5AA8-A06A-4F68-A2E4-502386B4BBA9",
          color: 4786933,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        }
      ],
      geometries: [
        {
          type: "BoxGeometry",
          uuid: "A5725130-91E9-416E-8A4D-C69041255A5D",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "92D90FB8-B0B7-4718-8129-04A828176F86",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "8DB57E59-737E-4D53-A63F-5BBEB09B03B1",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "FF67C666-A003-4D66-A817-22007CF0D9C7",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "F1212665-9091-4072-88C5-0036429D568A",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "673882F6-2889-4DDE-A235-7DB640BB7D69",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "75A4DFBC-A137-4B48-B1BC-B54DACA42ED7",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "9F612113-9D57-48E9-8A14-9EE82F66B111",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "3FF3FE46-EFA2-40BE-8CED-BA5A834B4736",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        }
      ]
    }
  },
  {
    artistId: 2,
    description: "Best thing youll ever see",
    title: "The Night watch",
    location: [40.70922922853889, -74.00780365188648],
    coverPhoto:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/images%2F17?alt=media&token=1e349583-75b5-48a0-9a8c-ea77dd6e7a36",
    likes: 9,
    artPiece: {
      object: {
        type: "Scene",
        uuid: "7D9E5688-88E8-49C7-8622-3E803CDB156F",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        children: [
          {
            type: "Mesh",
            uuid: "01ECD832-186F-4451-AE51-4E1C2D8E27F5",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.5628014258879713,
              0.2776247494721675,
              0.4700656711905371,
              1
            ],
            geometry: "B1B6B97F-F8B7-4CEC-A107-B4C185E67BE1",
            material: "6AB35083-D1A5-475D-B078-6F8F9D51E26A",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "DA8E7116-0706-48D2-A909-622992282840",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.4889166494314371,
              0.25992664218195094,
              0.39717751394711637,
              1
            ],
            geometry: "8430260C-11FA-49CF-806A-D183058EF3BD",
            material: "85D3CA26-C9C3-4EA9-860A-F33B3F90AE2A",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "4B81B195-82D2-4D4E-9E4E-50D3F17A4C43",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.508356093269929,
              0.18727515581724713,
              0.4860396853869396,
              1
            ],
            geometry: "D0E271CC-65FD-44EE-9FEE-BC87238A7ACB",
            material: "8DC8DBB2-5C09-443C-A404-CEC0AB47BFD1",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "5724B6CF-FD76-46F6-AF2C-48534F6140DE",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.508356093269929,
              0.18727515581724713,
              0.4860396853869396,
              1
            ],
            geometry: "4D5C3860-E746-4A64-9FBA-4AE9915815F1",
            material: "7D3A8C96-9BDE-4CEC-AEAB-67157A599DD7",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "0C72D61A-4A33-470F-8C1E-83CC3BDDD182",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.45358512263962236,
              0.18525637810780823,
              0.41299164472444577,
              1
            ],
            geometry: "16BEA5B4-6DA6-4E3D-A8CC-797E2FB3E808",
            material: "4F448FAB-980B-4F1C-94A1-1F98EA424F51",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "0667028D-0556-425C-946B-4454442A5EFC",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              -0.4549102236937401,
              0.18454643185327804,
              0.4131375669944759,
              1
            ],
            geometry: "54B9DE7A-EABC-46D0-8A9C-DC0C850C8FC7",
            material: "5E1BFD22-A4FF-415F-8696-680E6AA078C0",
            castShadow: true
          }
        ],
        background: {
          name: "",
          uuid: "797948B7-B72F-4610-93D1-D8983BA367C2",
          wrap: [1001, 1001],
          flipY: true,
          center: [0, 0],
          format: 1023,
          offset: [0, 0],
          repeat: [1, 1],
          mapping: 300,
          metadata: {
            type: "Texture",
            version: 4.5,
            generator: "Texture.toJSON"
          },
          rotation: 0,
          magFilter: 1006,
          minFilter: 1008,
          anisotropy: 1
        }
      },
      metadata: { type: "Object", version: 4.5, generator: "Object3D.toJSON" },
      materials: [
        {
          type: "MeshBasicMaterial",
          uuid: "6AB35083-D1A5-475D-B078-6F8F9D51E26A",
          color: 2415533,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "85D3CA26-C9C3-4EA9-860A-F33B3F90AE2A",
          color: 16320043,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "8DC8DBB2-5C09-443C-A404-CEC0AB47BFD1",
          color: 1501536,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "7D3A8C96-9BDE-4CEC-AEAB-67157A599DD7",
          color: 1501536,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "4F448FAB-980B-4F1C-94A1-1F98EA424F51",
          color: 15729660,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "5E1BFD22-A4FF-415F-8696-680E6AA078C0",
          color: 15729660,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        }
      ],
      geometries: [
        {
          type: "SphereGeometry",
          uuid: "B1B6B97F-F8B7-4CEC-A107-B4C185E67BE1",
          radius: 0.025,
          widthSegments: 64,
          heightSegments: 64
        },
        {
          type: "SphereGeometry",
          uuid: "8430260C-11FA-49CF-806A-D183058EF3BD",
          radius: 0.025,
          widthSegments: 64,
          heightSegments: 64
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "D0E271CC-65FD-44EE-9FEE-BC87238A7ACB",
          detail: 0,
          radius: 0.025
        },
        {
          type: "TetrahedronBufferGeometry",
          uuid: "4D5C3860-E746-4A64-9FBA-4AE9915815F1",
          detail: 0,
          radius: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "16BEA5B4-6DA6-4E3D-A8CC-797E2FB3E808",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "54B9DE7A-EABC-46D0-8A9C-DC0C850C8FC7",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        }
      ]
    }
  },
  {
    artistId: 4,
    description: "Like for like",
    title: "The Last Supper",
    location: [40.70922922853889, -74.00780365188648],
    coverPhoto:
      "https://firebasestorage.googleapis.com/v0/b/graftarfinal-6b59a.appspot.com/o/images%2F18?alt=media&token=7d414e9c-d537-4131-b3c4-97d31e8f90bb",
    likes: 9,
    artPiece: {
      object: {
        type: "Scene",
        uuid: "AFBCAE78-BD64-4651-839C-F6A1FFF5BC7B",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        children: [
          {
            type: "Mesh",
            uuid: "7812136E-BD44-4F3A-9D7E-E300EDCC0F6C",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.04864093078556613,
              0.05058933527632082,
              -0.09062662595130537,
              1
            ],
            geometry: "28CEEC7F-B160-4D4A-A6CB-C39E326F90BD",
            material: "5C413F21-D35F-4C6E-94A5-4402407A6DAD",
            castShadow: true
          },
          {
            type: "Mesh",
            uuid: "992A32F5-7EC9-44CB-B573-F220ED6F1B96",
            matrix: [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0.04949554109276686,
              0.05100875678122053,
              -0.09276297703547895,
              1
            ],
            geometry: "CAF2F522-6866-41CD-99B8-69CEC5AAEAF2",
            material: "5AEEE841-52A3-41B1-867F-679EA670C5BE",
            castShadow: true
          }
        ],
        background: {
          name: "",
          uuid: "9017BF0F-F92C-4A75-81AB-E52CF2CB873A",
          wrap: [1001, 1001],
          flipY: true,
          center: [0, 0],
          format: 1023,
          offset: [0, 0],
          repeat: [1, 1],
          mapping: 300,
          metadata: {
            type: "Texture",
            version: 4.5,
            generator: "Texture.toJSON"
          },
          rotation: 0,
          magFilter: 1006,
          minFilter: 1008,
          anisotropy: 1
        }
      },
      metadata: { type: "Object", version: 4.5, generator: "Object3D.toJSON" },
      materials: [
        {
          type: "MeshBasicMaterial",
          uuid: "5C413F21-D35F-4C6E-94A5-4402407A6DAD",
          color: 4267235,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        },
        {
          type: "MeshBasicMaterial",
          uuid: "5AEEE841-52A3-41B1-867F-679EA670C5BE",
          color: 4267235,
          depthFunc: 3,
          depthTest: true,
          depthWrite: true
        }
      ],
      geometries: [
        {
          type: "BoxGeometry",
          uuid: "28CEEC7F-B160-4D4A-A6CB-C39E326F90BD",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        },
        {
          type: "BoxGeometry",
          uuid: "CAF2F522-6866-41CD-99B8-69CEC5AAEAF2",
          depth: 0.025,
          width: 0.025,
          height: 0.025
        }
      ]
    }
  }
];

const seed = () =>
  Promise.all(newUsers.map(user => User.create(user))).then(() =>
    Promise.all(newArt.map(art => Art.create(art)))
  );

const main = () => {
  console.log("Syncing db...");
  db.sync({ force: true })
    .then(() => {
      console.log("Seeding database...");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
