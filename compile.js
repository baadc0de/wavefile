/*
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * https://github.com/rochars/wavefile
 *
 */

const WaveFile = require("./index.js");

/*
WaveFile.prototype["container"] = WaveFile.prototype.container;
WaveFile.prototype["chunkSize"] = WaveFile.prototype.chunkSize;
WaveFile.prototype["format"] = WaveFile.prototype.format;
WaveFile.prototype["fromScratch"] = WaveFile.prototype.fromScratch;
WaveFile.prototype["fromBuffer"] = WaveFile.prototype.fromBuffer;
WaveFile.prototype["toBuffer"] = WaveFile.prototype.toBuffer;
WaveFile.prototype["toRIFF"] = WaveFile.prototype.toRIFF;
WaveFile.prototype["toRIFX"] = WaveFile.prototype.toRIFX;
WaveFile.prototype["toBitDepth"] = WaveFile.prototype.toBitDepth;
WaveFile.prototype["interleave"] = WaveFile.prototype.interleave;
WaveFile.prototype["deInterleave"] = WaveFile.prototype.deInterleave;
WaveFile.prototype["toIMAADPCM"] = WaveFile.prototype.toIMAADPCM;
WaveFile.prototype["fromIMAADPCM"] = WaveFile.prototype.fromIMAADPCM;
WaveFile.prototype["toALaw"] = WaveFile.prototype.toALaw;
WaveFile.prototype["fromALaw"] = WaveFile.prototype.fromALaw;
WaveFile.prototype["toMuLaw"] = WaveFile.prototype.toMuLaw;
WaveFile.prototype["fromMuLaw"] = WaveFile.prototype.fromMuLaw;
*/

window["WaveFile"] = WaveFile;
