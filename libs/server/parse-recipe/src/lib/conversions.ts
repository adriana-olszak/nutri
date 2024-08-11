type ConversionFunction = (input: number) => number;

const unitConversions = new Map<string, ConversionFunction>();

// temperature
unitConversions.set('c->f', (input: number) => (input * 9) / 5 + 32);
unitConversions.set('f->c', (input: number) => ((input - 32) * 5) / 9);

// weight (kg is base): lb, kg, oz, mg, g
const lbFactor = 2.20462;
const ozFactor = 35.274;
const mgFactor = 1000000;
const gFactor = 1000;

unitConversions.set('kg->lb', (input: number) => input * lbFactor);
unitConversions.set('kg->oz', (input: number) => input * ozFactor);
unitConversions.set('kg->mg', (input: number) => input * mgFactor);
unitConversions.set('kg->g', (input: number) => input * gFactor);

unitConversions.set('lb->kg', (input: number) => input / lbFactor);
unitConversions.set('lb->oz', (input: number) => (input / lbFactor) * ozFactor);
unitConversions.set('lb->mg', (input: number) => (input / lbFactor) * mgFactor);
unitConversions.set('lb->g', (input: number) => (input / lbFactor) * gFactor);

unitConversions.set('oz->kg', (input: number) => input / ozFactor);
unitConversions.set('oz->lb', (input: number) => (input / ozFactor) * lbFactor);
unitConversions.set('oz->mg', (input: number) => (input / ozFactor) * mgFactor);
unitConversions.set('oz->g', (input: number) => (input / ozFactor) * gFactor);

unitConversions.set('mg->kg', (input: number) => input / mgFactor);
unitConversions.set('mg->lb', (input: number) => (input / mgFactor) * lbFactor);
unitConversions.set('mg->oz', (input: number) => (input / mgFactor) * ozFactor);
unitConversions.set('mg->g', (input: number) => input / gFactor);

unitConversions.set('g->kg', (input: number) => input / gFactor);
unitConversions.set('g->lb', (input: number) => (input / gFactor) * lbFactor);
unitConversions.set('g->oz', (input: number) => (input / gFactor) * ozFactor);
unitConversions.set('g->mg', (input: number) => input * gFactor);

// length (in is base): in, cm
const cmFactor = 2.54;
unitConversions.set('in->cm', (input: number) => input * cmFactor);
unitConversions.set('cm->in', (input: number) => input / cmFactor);

export default unitConversions;
