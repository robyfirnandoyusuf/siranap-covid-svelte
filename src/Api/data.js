// pokemon.js
// Implementations for all the calls for the pokemon endpoints.
import Api from "./Api";
const baseUrl = "http://localhost:8000/api"

// Method to get a list of all Pokemon
export const getProvinsi = () => {
  let data = [
    {
      label:'ACEH',
      value:'11prop'
    },
    {
      label:'SUMATERA UTARA',
      value:'12prop'
    },
    {
      label:'SUMATERA BARAT',
      value:'13prop'
    },
    {
      label:'R I A U',
      value:'14prop'
    },
    {
      label:'JAMBI',
      value:'15prop'
    },
    {
      label:'SUMATERA SELATAN',
      value:'16prop'
    },
    {
      label:'BENGKULU',
      value:'17prop'
    },
    {
      label:'LAMPUNG',
      value:'18prop'
    },
    {
      label:'KEPULAUAN BANGKA BELITUNG',
      value:'19prop'
    },
    {
      label:'KEPULAUAN RIAU',
      value:'20prop'
    },
    {
      label:'DKI JAKARTA',
      value:'31prop'
    },
    {
      label:'JAWA BARAT',
      value:'32prop'
    },
    {
      label:'JAWA TENGAH',
      value:'33prop'
    },
    {
      label:'D I YOGYAKARTA',
      value:'34prop'
    },
    {
      label:'JAWA TIMUR',
      value:'35prop'
    },
    {
      label:'BANTEN',
      value:'36prop'
    },
    {
      label:'BALI',
      value:'51prop'
    },
    {
      label:'NUSA TENGGARA BARAT',
      value:'52prop'
    },
    {
      label:'NUSA TENGGARA TIMUR',
      value:'53prop'
    },
    {
      label:'KALIMANTAN BARAT',
      value:'61prop'
    },
    {
      label:'KALIMANTAN TENGAH',
      value:'62prop'
    },
    {
      label:'KALIMANTAN SELATAN',
      value:'63prop'
    },
    {
      label:'KALIMANTAN TIMUR',
      value:'64prop'
    },
    {
      label:'KALIMANTAN UTARA',
      value:'65prop'
    },
    {
      label:'SULAWESI UTARA',
      value:'71prop'
    },
    {
      label:'SULAWESI TENGAH',
      value:'72prop'
    },
    {
      label:'SULAWESI SELATAN',
      value:'73prop'
    },
    {
      label:'SULAWESI TENGGARA',
      value:'74prop'
    },
    {
      label:'GORONTALO',
      value:'75prop'
    },
    {
      label:'SULAWESI BARAT',
      value:'76prop'
    },
    {
      label:'MALUKU',
      value:'81prop'
    },
    {
      label:'MALUKU UTARA',
      value:'82prop'
    },
    {
      label:'PAPUA BARAT',
      value:'91prop'
    },
    {
      label:'PAPUA',
      value:'92prop'
    },
    {
      label:'Provinsi Test',
      value:'99prop'
    },
  ]
  return data
};

// Get a pokemon details by name
export const getKabKota = async(val) => {
    try {
      const response = await Api.getJson(`${baseUrl}/get-kabkota/${val}`);
      return response;
    } catch (error) {
      console.error(error);
    }
};