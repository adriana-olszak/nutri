import { UnitDetail, Units } from './types';
import CultureInvariantConversions from './conversions';

const torba: UnitDetail = { symbol: 'torba', text: 'torba' };
const porcja: UnitDetail = { symbol: 'porcja', text: 'porcja' };
const pudełko: UnitDetail = { symbol: 'pudełko', text: 'pudełko' };
const pęczek: UnitDetail = { symbol: 'pęczek', text: 'pęczek' };
const szklanka: UnitDetail = {
  symbol: 'szklanka',
  text: 'szklanka',
  conversionGroup: 'objętość'
};
const puszka: UnitDetail = { symbol: 'puszka', text: 'puszka' };
const ząbek: UnitDetail = { symbol: 'ząbek', text: 'ząbek' };
const szczypta: UnitDetail = { symbol: 'szczypta', text: 'szczypta' };
const kropla: UnitDetail = { symbol: 'kropla', text: 'kropla' };
const gram: UnitDetail = { symbol: 'g', text: 'gram', conversionGroup: 'masa' };
const litr: UnitDetail = {
  symbol: 'l',
  text: 'litr',
  conversionGroup: 'objętość'
};
const ziarno: UnitDetail = { symbol: 'ziarno', text: 'ziarno' };
const centymetr: UnitDetail = {
  symbol: 'cm',
  text: 'centymetr',
  conversionGroup: 'długość'
};
const kilogram: UnitDetail = {
  symbol: 'kg',
  text: 'kilogram',
  conversionGroup: 'masa'
};
const miligram: UnitDetail = {
  symbol: 'mg',
  text: 'miligram',
  conversionGroup: 'masa'
};
const mililitr: UnitDetail = {
  symbol: 'ml',
  text: 'mililitr',
  conversionGroup: 'objętość'
};
const opakowanie: UnitDetail = { symbol: 'opakowanie', text: 'opakowanie' };
const sztuka: UnitDetail = { symbol: 'szt', text: 'sztuka' };
const plaster: UnitDetail = { symbol: 'plaster', text: 'plaster' };
const łodyga: UnitDetail = { symbol: 'łodyga', text: 'łodyga' };
const patyk: UnitDetail = { symbol: 'patyk', text: 'patyk' };
const łyżeczka: UnitDetail = {
  symbol: 'łyżeczka',
  text: 'łyżeczka',
  conversionGroup: 'objętość'
};
const łyżka: UnitDetail = {
  symbol: 'łyżka',
  text: 'łyżka',
  conversionGroup: 'objętość'
};

const ingredientUnits: Map<string, UnitDetail> = new Map();
ingredientUnits.set('torba', torba);
ingredientUnits.set('torby', torba);
ingredientUnits.set('porcja', porcja);
ingredientUnits.set('porcje', porcja);
ingredientUnits.set('pudełko', pudełko);
ingredientUnits.set('pudełka', pudełko);
ingredientUnits.set('pęczek', pęczek);
ingredientUnits.set('pęczki', pęczek);
ingredientUnits.set('szklanka', szklanka);
ingredientUnits.set('szklanki', szklanka);
ingredientUnits.set('puszka', puszka);
ingredientUnits.set('puszki', puszka);
ingredientUnits.set('ząbek', ząbek);
ingredientUnits.set('ząbki', ząbek);
ingredientUnits.set('szczypta', szczypta);
ingredientUnits.set('szczypty', szczypta);
ingredientUnits.set('kropla', kropla);
ingredientUnits.set('krople', kropla);
ingredientUnits.set('g', gram);
ingredientUnits.set('gram', gram);
ingredientUnits.set('gramy', gram);
ingredientUnits.set('l', litr);
ingredientUnits.set('litr', litr);
ingredientUnits.set('litry', litr);
ingredientUnits.set('ziarno', ziarno);
ingredientUnits.set('ziarna', ziarno);
ingredientUnits.set('cm', centymetr);
ingredientUnits.set('centymetr', centymetr);
ingredientUnits.set('centymetry', centymetr);
ingredientUnits.set('kg', kilogram);
ingredientUnits.set('kilogram', kilogram);
ingredientUnits.set('kilogramy', kilogram);
ingredientUnits.set('mg', miligram);
ingredientUnits.set('miligram', miligram);
ingredientUnits.set('miligramy', miligram);
ingredientUnits.set('ml', mililitr);
ingredientUnits.set('mililitr', mililitr);
ingredientUnits.set('mililitry', mililitr);
ingredientUnits.set('opakowanie', opakowanie);
ingredientUnits.set('opakowania', opakowanie);
ingredientUnits.set('szt', sztuka);
ingredientUnits.set('sztuka', sztuka);
ingredientUnits.set('sztuki', sztuka);
ingredientUnits.set('plaster', plaster);
ingredientUnits.set('plastry', plaster);
ingredientUnits.set('łodyga', łodyga);
ingredientUnits.set('łodygi', łodyga);
ingredientUnits.set('patyk', patyk);
ingredientUnits.set('patyki', patyk);
ingredientUnits.set('łyżeczka', łyżeczka);
ingredientUnits.set('łyżeczki', łyżeczka);
ingredientUnits.set('łyżka', łyżka);
ingredientUnits.set('łyżki', łyżka);

const ingredientSizes: string[] = ['duży', 'duża', 'duże', 'średni', 'średnia', 'średnie', 'mały', 'mała', 'małe'];

const timeUnits: Map<string, string> = new Map();
timeUnits.set('min', 'minuta');
timeUnits.set('minuta', 'minuta');
timeUnits.set('minuty', 'minuta');
timeUnits.set('minut', 'minuta');
timeUnits.set('sek', 'sekunda');
timeUnits.set('sekunda', 'sekunda');
timeUnits.set('sekundy', 'sekunda');
timeUnits.set('sekund', 'sekunda');
timeUnits.set('godz', 'godzina');
timeUnits.set('godzina', 'godzina');
timeUnits.set('godziny', 'godzina');
timeUnits.set('godzin', 'godzina');
timeUnits.set('dzień', 'dzień');
timeUnits.set('dni', 'dzień');

const timeUnitMultipliers: Map<string, number> = new Map();
timeUnitMultipliers.set('minuta', 60);
timeUnitMultipliers.set('sekunda', 1);
timeUnitMultipliers.set('godzina', 60 * 60);
timeUnitMultipliers.set('dzień', 60 * 60 * 24);

const celsius: UnitDetail = {
  symbol: 'C',
  text: 'Celsjusza',
  conversionGroup: 'temperatura'
};

const temperatureUnits: Map<string, UnitDetail> = new Map();
temperatureUnits.set('C', celsius);
temperatureUnits.set('°C', celsius);
temperatureUnits.set('Celsjusza', celsius);

const temperatureMarkers: string[] = ['°', 'stopni', 'stopnie'];

const ingredientPrepositions: string[] = [''];

const ingredientQuantities: Map<string, number> = new Map();
ingredientQuantities.set('jeden', 1);
ingredientQuantities.set('jedna', 1);
ingredientQuantities.set('dwa', 2);
ingredientQuantities.set('dwie', 2);
ingredientQuantities.set('trzy', 3);
ingredientQuantities.set('cztery', 4);
ingredientQuantities.set('pięć', 5);
ingredientQuantities.set('sześć', 6);
ingredientQuantities.set('siedem', 7);
ingredientQuantities.set('osiem', 8);
ingredientQuantities.set('dziewięć', 9);
ingredientQuantities.set('dziesięć', 10);

const ingredientRangeMarker: string[] = ['do', '-', 'lub'];

const ingredientQuantityAddMarker: string[] = ['i'];

const defaultConversions: Map<string, string[]> = new Map();
defaultConversions.set('masa', ['kg', 'g', 'mg']);
defaultConversions.set('objętość', ['l', 'ml', 'szklanka', 'łyżka', 'łyżeczka']);
defaultConversions.set('długość', ['cm']);
defaultConversions.set('temperatura', ['C']);

const converters: Map<string, (input: number) => number> = new Map(CultureInvariantConversions);
const unitConversions = { defaultConversions, converters };

const polishUnits: Units = {
  ingredientUnits,
  ingredientSizes,
  timeUnits,
  timeUnitMultipliers,
  temperatureUnits,
  ingredientPrepositions,
  temperatureMarkers,
  ingredientQuantities,
  ingredientRangeMarker,
  ingredientQuantityAddMarker,
  unitConversions,
  defaultTemperatureUnit: 'C'
};

export default polishUnits;
