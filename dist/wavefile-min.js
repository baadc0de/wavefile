/*
 endianness: Swap byte endianness in arrays.
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/endianness

 wavefile
 Read & write wave files with 8, 16, 24, 32 PCM, 32 IEEE & 64-bit data.
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/wavefile

 bitdepth
 Change the bit depth of audio samples to and from 8, 16, 24, 32, 32 IEEE & 64-bit.
 Copyright (c) 2017 Rafael da Silva Rocha. MIT License.
 https://github.com/rochars/bitdepth

 byte-data
 Readable data to and from byte buffers.
 Copyright (c) 2017 Rafael da Silva Rocha.
 https://github.com/rochars/byte-data

*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.objectCreate=$jscomp.ASSUME_ES5||"function"==typeof Object.create?Object.create:function(a){var h=function(){};h.prototype=a;return new h};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},h={};try{return h.__proto__=a,h.a}catch(l){}return!1};
$jscomp.setPrototypeOf="function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,h){a.__proto__=h;if(a.__proto__!==h)throw new TypeError(a+" is not extensible");return a}:null;
$jscomp.inherits=function(a,h){a.prototype=$jscomp.objectCreate(h.prototype);a.prototype.constructor=a;if($jscomp.setPrototypeOf){var l=$jscomp.setPrototypeOf;l(a,h)}else for(l in h)if("prototype"!=l)if(Object.defineProperties){var g=Object.getOwnPropertyDescriptor(h,l);g&&Object.defineProperty(a,l,g)}else a[l]=h[l];a.superClass_=h.prototype};
(function(a){function h(g){if(l[g])return l[g].exports;var k=l[g]={i:g,l:!1,exports:{}};a[g].call(k.exports,k,k.exports,h);k.l=!0;return k.exports}var l={};h.m=a;h.c=l;h.d=function(a,k,e){h.o(a,k)||Object.defineProperty(a,k,{configurable:!1,enumerable:!0,get:e})};h.n=function(a){var k=a&&a.__esModule?function(){return a["default"]}:function(){return a};h.d(k,"a",k);return k};h.o=function(a,k){return Object.prototype.hasOwnProperty.call(a,k)};h.p="";return h(h.s=5)})([function(a,h){function l(a,e){var c=
a.length+1;2==e?c=8:16==e&&(c=2);return g(a,c)}function g(a,e){for(;a.length<e;)a="0"+a;return a}a.exports.fixByteArraySize=function(a,e){var c=0,b=a.length%e;if(b)for(b=-1*(b-e);c<b;)a.push(0),c++};a.exports.padding=function(a,e,c){a[c]=l(a[c],e)};a.exports.paddingNibble=function(a,e,c){2==e&&4>a[c].length&&(a[c]=Array(5-a[c].length).join("0")+a[c])};a.exports.paddingCrumb=function(a,e,c){(2==e||16==e)&&2>a[c].length&&(a[c]="0"+a[c])};a.exports.bytePadding=l;a.exports.lPadZeros=g},function(a,h){function l(e){g[0]=
e;return k[0]}h=new Int8Array(4);var g=new Int32Array(h.buffer,0,1),k=new Float32Array(h.buffer,0,1);a.exports=l;a.exports.pack=l;a.exports.unpack=function(e){k[0]=e;return g[0]}},function(a,h){a.exports.BitDepthOffsets={1:1,2:1,4:1,8:1,16:2,24:3,32:4,40:5,48:6,64:8};a.exports.BitDepthMaxValues={2:4,4:16,8:256,16:65536,24:16777216,32:4294967296,40:1099511627776,48:281474976710656}},function(a,h){a.exports.endianness=function(a,g){for(var k=a.length,e=0;e<k;){for(var c,b=a,f=e,d=0,h=g-1,l=parseInt(g/
2,10);d<l;)c=b[f+d],b[f+d]=b[f+h],b[f+h]=c,d++,h--;e+=g}return a}},function(a,h,l){function g(c,f){f=void 0===f?!1:f;for(var d="",b=0,e=c.length;b<e;){var a=k.lPadZeros(c[b].toString(2),8);d=f?d+a:a+d;b++}return d}var k=l(0),e=new Float32Array(1),c=new Int32Array(e.buffer);a.exports.getBinary=g;a.exports.decodeFloat16=function(c){c=parseInt(g(c,!0),2);var b=(c&31744)>>10,d=c&1023;return(b?Math.pow(2,b-15)*(1+d/1024):d/1024*.00006103515625)*(c>>15?-1:1)};a.exports.decodeFloat64=function(c){if("0,0,0,0,0,0,0,0"==
c.toString())return 0;c=g(c);for(var b="1"+c.substr(12,52),d=1,e=0,a=0;a<b.length;)e+=d*parseInt(b.charAt(a),10),d/=2,a++;return("1"==c.charAt(0)?-1:1)*e*Math.pow(2,parseInt(c.substr(1,11),2)-1023)};a.exports.toFloat64=function(c){if(0==c)return[0,0];var b=0;0>=c&&(b=2147483648,c=-c);var d=Math.floor(Math.log(c)/Math.log(2)),e=Math.floor(c/Math.pow(2,d)*Math.pow(2,52));c=e&4294967295;e/=Math.pow(2,32);return[b|d+1023<<20|e&1048575,c]};a.exports.toHalf=function(b){e[0]=b;var a=c[0];b=a>>16&32768;var d=
a>>12&2047;a=a>>23&255;return 103>a?b:(b|a-112<<10|d>>1)+(d&1)}},function(a,h,l){var g=l(6),k=l(7);a=function(e,c,b){c=k.WaveFileReaderWriter.call(this,void 0===c?!1:c,void 0===b?!1:b)||this;e&&c.fromBuffer(e);return c};$jscomp.inherits(a,k.WaveFileReaderWriter);a.prototype.toRIFF=function(){this.chunkId="RIFF"};a.prototype.toRIFX=function(){this.chunkId="RIFX"};a.prototype.toBitDepth=function(e){g.toBitDepth(this.samples_,this.bitDepth_,e);this.fromScratch(this.numChannels,this.sampleRate,e,this.samples_,
{container:this.chunkId})};a.prototype.interleave=function(){var e=[],c,b,a=this.samples_[0].length;for(c=0;c<a;c++)for(b=0;b<this.samples_.length;b++)e.push(this.samples_[b][c]);this.samples_=e};a.prototype.deInterleave=function(){var e=[],c;for(c=0;c<this.numChannels;c++)e[c]=[];c=0;for(var b;c<this.samples_.length;){for(b=0;b<this.numChannels;b++)e[b].push(this.samples_[c+b]);c+=b}this.samples_=e};window.WaveFile=a},function(a,h){var l={8:256,16:65536,24:16777216,32:4294967296};a.exports.toBitDepth=
function(a,k,e){if(k!=e){var c="8 16 24 32 32f 64".split(" ");if(-1==c.indexOf(k)||-1==c.indexOf(e))throw Error("Invalid bit depth.");c=a.length;for(var b=0;b<c;b++){var f=a[b];"8"==k&&(f-=128);if("32f"==e||"64"==e){var d=k,g=parseInt(l[d]/2,10);"32f"!=d&&"64"!=d&&(f=0<f?f/(g-1):f/g)}else{d=f;g=k;f=e;var h=parseInt(l[g]/2,10),n=parseInt(l[f]/2,10);d="32f"==g||"64"==g?0<d?d*(n-1):d*n:0<d?parseInt(d/(h-1)*n-1,10):parseInt(d/h*n,10);"8"==f&&(d+=128);f=d}a[b]=f}}};a.exports.BitDepthMaxValues=l},function(a,
h,l){var g=l(8),k=l(14);h=function(a,c){a=void 0===a?!1:a;c=void 0===c?!1:c;var b=k.WaveFileHeader.call(this)||this;b.isFromScratch_=!1;b.enforceFact=a;b.enforceBext=c;b.WaveErrors={format:"Not a supported format.",wave:"Could not find the 'WAVE' chunk","fmt ":"Could not find the 'fmt ' chunk",data:"Could not find the 'data' chunk",fact:"Could not find the 'fact' chunk",bext:"Could not find the 'bext' chunk",bitDepth:"Invalid bit depth.",numChannels:"Invalid number of channels.",sampleRate:"Invalid sample rate."};
b.headerFormats_={4:17,8:1,16:1,24:1,32:1,"32f":3,64:3};b.samples_=[];b.bytes_=[];return b};$jscomp.inherits(h,k.WaveFileHeader);h.prototype.fromScratch=function(a,c,b,f,d){d=void 0===d?{}:d;d.container||(d.container="RIFF");this.isFromScratch_=!0;var e=parseInt(b,10)/8;this.chunkSize=36+f.length*e;this.subChunk1Size=16;this.byteRate=a*e*c;this.blockAlign=a*e;this.chunkId=d.container;this.format="WAVE";this.subChunk1Id="fmt ";this.audioFormat=this.headerFormats_[b];this.numChannels=a;this.sampleRate=
c;this.bitsPerSample=parseInt(b,10);this.subChunk2Id="data";this.subChunk2Size=f.length*e;this.samples_=f;this.bitDepth_=b};h.prototype.fromBuffer=function(a){this.isFromScratch_=!1;this.readRIFFChunk_(a);this.readWAVEChunk_(a);this.readFmtChunk_(a);this.readFactChunk_(a);this.readBextChunk_(a);this.readDataChunk_(a)};h.prototype.toBuffer=function(){this.checkWriteInput_(this.numChannels,this.sampleRate,this.bitDepth_);this.samplesToBytes_();return new Uint8Array(this.createWaveFile_())};h.prototype.readRIFFChunk_=
function(a){this.chunkId=g.fromBytes(a.slice(0,4),8,{"char":!0});if("RIFF"!=this.chunkId&&"RIFX"!=this.chunkId)throw Error(this.WaveErrors.format);this.chunkSize=g.fromBytes(a.slice(4,8),32,{be:"RIFX"==this.chunkId})[0]};h.prototype.readWAVEChunk_=function(a){if(-1===g.findString(a,"WAVE"))throw Error(this.WaveErrors.wave);this.format="WAVE"};h.prototype.readFmtChunk_=function(a){var c=g.findString(a,"fmt ");if(-1===c)throw Error(this.WaveErrors["fmt "]);var b={be:"RIFX"==this.chunkId};this.subChunk1Id=
"fmt ";this.subChunk1Size=g.fromBytes(a.slice(c+4,c+8),32,b)[0];this.audioFormat=g.fromBytes(a.slice(c+8,c+10),16,b)[0];this.numChannels=g.fromBytes(a.slice(c+10,c+12),16,b)[0];this.sampleRate=g.fromBytes(a.slice(c+12,c+16),32,b)[0];this.byteRate=g.fromBytes(a.slice(c+16,c+20),32,b)[0];this.blockAlign=g.fromBytes(a.slice(c+20,c+22),16,b)[0];this.bitsPerSample=g.fromBytes(a.slice(c+22,c+24),16,b)[0];this.bitDepth_=3==this.audioFormat&&32==this.bitsPerSample?"32f":this.bitsPerSample.toString()};h.prototype.readFactChunk_=
function(a){a=g.findString(a,"fact");if(-1===a&&this.enforceFact)throw Error(this.WaveErrors.fact);-1<a&&(this.factChunkId="fact")};h.prototype.readBextChunk_=function(a){var c=g.findString(a,"bext");if(-1===c&&this.enforceBext)throw Error(this.WaveErrors.bext);-1<c&&(this.bextChunkId="bext",this.bextChunkSize=g.fromBytes(a.slice(c+4,c+8),32,{be:"RIFX"==this.chunkId})[0],this.bextChunkData=g.fromBytes(a.slice(c+8,c+8+this.bextChunkSize),8))};h.prototype.readDataChunk_=function(a){var c=g.findString(a,
"data");if(-1===c)throw Error(this.WaveErrors.data);this.subChunk2Id="data";this.subChunk2Size=g.fromBytes(a.slice(c+4,c+8),32,{be:"RIFX"==this.chunkId})[0];this.samplesFromBytes_(a,c)};h.prototype.samplesFromBytes_=function(a,c){var b={signed:8==this.bitsPerSample?!1:!0,be:"RIFX"==this.chunkId};32==this.bitsPerSample&&3==this.audioFormat&&(b.float=!0);a=a.slice(c+8,c+8+this.subChunk2Size);this.samples_=4==this.bitsPerSample?g.fromBytes(a,8,b):g.fromBytes(a,this.bitsPerSample,b)};h.prototype.checkWriteInput_=
function(){this.validateBitDepth_();this.validateNumChannels_();this.validateSampleRate_()};h.prototype.validateBitDepth_=function(){if(!this.headerFormats_[this.bitDepth_])throw Error(this.WaveErrors.bitDepth);return!0};h.prototype.validateNumChannels_=function(){var a=this.numChannels*this.bitsPerSample/8;if(1>this.numChannels||65535<a)throw Error(this.WaveErrors.numChannels);return!0};h.prototype.validateSampleRate_=function(){var a=this.bitsPerSample/8*this.numChannels*this.sampleRate;if(1>this.sampleRate||
4294967295<a)throw Error(this.WaveErrors.sampleRate);return!0};h.prototype.samplesToBytes_=function(){var a={be:"RIFX"==this.chunkId};32==this.bitsPerSample&&3==this.audioFormat&&(a.float=!0);this.bytes_=g.toBytes(this.samples_,4==this.bitsPerSample?8:this.bitsPerSample,a);this.bytes_.length%2&&this.bytes_.push(0)};h.prototype.createWaveFile_=function(){var a={be:"RIFX"==this.chunkId},c=[];this.factChunkId&&(c=g.toBytes(this.factChunkId,8,{"char":!0}));var b=[];this.bextChunkId&&(b=b.concat(g.toBytes(this.bextChunkId,
8,{"char":!0}),g.toBytes([this.bextChunkSize],32,a),g.toBytes(this.bextChunkData,8)));return g.toBytes(this.chunkId,8,{"char":!0}).concat(g.toBytes([this.chunkSize],32,a),g.toBytes(this.format,8,{"char":!0}),g.toBytes(this.subChunk1Id,8,{"char":!0}),g.toBytes([this.subChunk1Size],32,a),g.toBytes([this.audioFormat],16,a),g.toBytes([this.numChannels],16,a),g.toBytes([this.sampleRate],32,a),g.toBytes([this.byteRate],32,a),g.toBytes([this.blockAlign],16,a),g.toBytes([this.bitsPerSample],16,a),b,c,g.toBytes(this.subChunk2Id,
8,{"char":!0}),g.toBytes([this.subChunk2Size],32,a),this.bytes_)};a.exports.WaveFileReaderWriter=h},function(a,h,l){h=l(9);var g=l(11),k=l(13);l=l(2);a.exports.findString=function(a,c){for(var b,f=0;f<a.length;f++)if(b=g.fromBytes(a.slice(f,f+c.length),8,{"char":!0}),b==c)return f;return-1};a.exports.toBytes=h.toBytes;a.exports.fromBytes=g.fromBytes;a.exports.packBooleans=k.packBooleans;a.exports.unpackBooleans=k.unpackBooleans;a.exports.packCrumbs=k.packCrumbs;a.exports.unpackCrumbs=k.unpackCrumbs;
a.exports.packNibbles=k.packNibbles;a.exports.unpackNibbles=k.unpackNibbles;a.exports.BitDepthOffsets=l.BitDepthOffsets;a.exports.BitDepthMaxValues=l.BitDepthMaxValues},function(a,h,l){function g(a,c,b){4==c?k(a,b,e.paddingNibble):2==c?k(a,b,e.paddingCrumb):1==c?k(a,b,function(){}):k(a,b)}function k(a,c,b){b=void 0===b?e.padding:b;if(10!=c)for(var d=0,f=a.length;d<f;)a[d]=a[d].toString(c),b(a,c,d),d++}l(1);var e=l(0),c=l(3),b=l(10),f=l(2);a.exports.toBytes=function(a,e,k){k=void 0===k?{}:k;var d=
10;"base"in k&&(d=k.base);var h=k.char?b.writeString:b["write"+e+"Bit"+(k.float?"Float":"")];for(var l=0,m=0,q=a.length,p=[];l<q;)m=h(p,a,l,m),l++;a=p;k.be&&c.endianness(a,f.BitDepthOffsets[e]);g(a,e,d);k.buffer&&(a=new Uint8Array(a));return a}},function(a,h,l){function g(a,b,f,d){a[d++]=b[f]&255;a[d++]=b[f]>>>8&255;a[d++]=b[f]>>>16&255;a[d++]=b[f]>>>24&255;return d}var k=l(4),e=l(1);a.exports.write64Bit=function(a,b,f,d){b=k.toFloat64(b[f]);d=g(a,b,1,d);return g(a,b,0,d)};a.exports.write48Bit=function(a,
b,f,d){a[d++]=b[f]&255;a[d++]=b[f]>>8&255;a[d++]=b[f]>>16&255;a[d++]=b[f]>>24&255;a[d++]=b[f]/4294967296&255;a[d++]=b[f]/1099511627776&255;return d};a.exports.write40Bit=function(a,b,f,d){a[d++]=b[f]&255;a[d++]=b[f]>>8&255;a[d++]=b[f]>>16&255;a[d++]=b[f]>>24&255;a[d++]=b[f]/4294967296&255;return d};a.exports.write32BitFloat=function(a,b,f,d){b=e.unpack(b[f]);a[d++]=b&255;a[d++]=b>>>8&255;a[d++]=b>>>16&255;a[d++]=b>>>24&255;return d};a.exports.write32Bit=g;a.exports.write24Bit=function(a,b,f,d){a[d++]=
b[f]&255;a[d++]=b[f]>>>8&255;a[d++]=b[f]>>>16&255;return d};a.exports.write16Bit=function(a,b,f,d){a[d++]=b[f]&255;a[d++]=b[f]>>>8&255;return d};a.exports.write16BitFloat=function(a,b,f,d){b=k.toHalf(b[f]);a[d++]=b>>>8&255;a[d++]=b&255;return d};a.exports.write8Bit=function(a,b,f,d){a[d++]=b[f]&255;return d};a.exports.write4Bit=function(a,b,f,d){a[d++]=b[f]&15;return d};a.exports.write2Bit=function(a,b,f,d){a[d++]=0>b[f]?b[f]+4:b[f];return d};a.exports.write1Bit=function(a,b,f,d){a[d++]=b[f]?1:0;
return d};a.exports.writeString=function(a,b,f,d){a[d++]=b.charCodeAt(f);return d}},function(a,h,l){function g(a,d,c,e){var f=[],g=0,h=0,l=b.BitDepthOffsets[d],m=a.length-(l-1);d=b.BitDepthMaxValues[d];for(c=c?k:function(a,b){return a};g<m;)f[h]=c(e(a,g),d),g+=l,h++;return f}function k(a,b){a>parseInt(b/2,10)-1&&(a-=b);return a}var e=l(3),c=l(12),b=l(2);a.exports.fromBytes=function(a,b,k){k=void 0===k?{}:k;var d=10;"base"in k&&(d=k.base);k.be&&e.endianness(a,b/8);if(10!=d)for(var f=0,h=a.length;f<
h;)a[f]=parseInt(a[f],d),f++;a=g(a,b,k.signed,k.char?c.readChar:c["read"+(2==b||4==b?8:b)+"Bit"+(k.float?"Float":"")]);k.char&&(a=a.join(""));return a}},function(a,h,l){function g(a,b,c){--c;for(var d="";0<=c;)d+=e.bytePadding(a[c+b].toString(2),2),c--;return parseInt(d,2)}function k(a,b){return(a[3+b]<<24|a[2+b]<<16|a[1+b]<<8|a[b])>>>0}var e=l(0),c=l(4),b=l(1);a.exports.readChar=function(a,b){return String.fromCharCode(a[b])};a.exports.read1Bit=function(a,b){return parseInt(a[b],2)};a.exports.read8Bit=
function(a,b){return a[b]};a.exports.read16Bit=function(a,b){return a[1+b]<<8|a[b]};a.exports.read16BitFloat=function(a,b){return c.decodeFloat16(a.slice(b,b+2))};a.exports.read24Bit=function(a,b){return a[2+b]<<16|a[1+b]<<8|a[b]};a.exports.read32Bit=k;a.exports.read32BitFloat=function(a,c){return b.pack(k(a,c))};a.exports.read40Bit=function(a,b){return g(a,b,5)};a.exports.read48Bit=function(a,b){return g(a,b,6)};a.exports.read64Bit=function(a,b){return c.decodeFloat64(a.slice(b,b+8))}},function(a,
h,l){var g=l(0);a.exports.packBooleans=function(a){var e=[],c=0,b=0;g.fixByteArraySize(a,8);for(var f=a.length-7;c<f;)e[b++]=parseInt(a[c].toString(2)+a[c+1].toString(2)+a[c+2].toString(2)+a[c+3].toString(2)+a[c+4].toString(2)+a[c+5].toString(2)+a[c+6].toString(2)+a[c+7].toString(2),2),c+=8;return e};a.exports.unpackBooleans=function(a){for(var e=[],c=0,b=0,f=a.length,d;c<f;)d=g.lPadZeros(a[c].toString(2),8),e[b++]=parseInt(d[0],2),e[b++]=parseInt(d[1],2),e[b++]=parseInt(d[2],2),e[b++]=parseInt(d[3],
2),e[b++]=parseInt(d[4],2),e[b++]=parseInt(d[5],2),e[b++]=parseInt(d[6],2),e[b++]=parseInt(d[7],2),c++;return e};a.exports.packCrumbs=function(a){var e=[],c=0,b=0;g.fixByteArraySize(a,4);for(var f=a.length-3;c<f;)e[b++]=parseInt(g.lPadZeros(a[c].toString(2),2)+g.lPadZeros(a[c+1].toString(2),2)+g.lPadZeros(a[c+2].toString(2),2)+g.lPadZeros(a[c+3].toString(2),2),2),c+=4;return e};a.exports.unpackCrumbs=function(a){var e=[],c=0,b=0,f=a.length;for(console.log(f);c<f;){var d=g.lPadZeros(a[c].toString(2),
8);e[b++]=parseInt(d[0]+d[1],2);e[b++]=parseInt(d[2]+d[3],2);e[b++]=parseInt(d[4]+d[5],2);e[b++]=parseInt(d[6]+d[7],2);c++}return e};a.exports.packNibbles=function(a){var e=[],c=0,b=0,f=a.length;for(f%2&&a.push(0);c<f;)e[b++]=parseInt(a[c].toString(16)+a[c+1].toString(16),16),c+=2;return e};a.exports.unpackNibbles=function(a){for(var e=[],c=0,b=0,f=a.length;c<f;)e[b++]=parseInt(a[c].toString(16)[0],16),e[b++]=parseInt(a[c].toString(16)[1],16),c++;return e}},function(a,h){a.exports.WaveFileHeader=
function(){this.chunkId="";this.chunkSize=0;this.format=this.subChunk1Id="";this.cbSize=this.bitsPerSample=this.blockAlign=this.byteRate=this.sampleRate=this.numChannels=this.audioFormat=this.subChunk1Size=0;this.factChunkId="";this.factChunkSize=4;this.dwSampleLength=0;this.subChunk2Id="";this.subChunk2Size=0;this.bextChunkId="";this.bextChunkSize=0;this.bextChunkData=[]}}]);
