// This file testprogram.js can be substituted by one of several tests
// which may not be redistributable
// for example
//    cbmbasic  loaded at 0xa000 with entry point 0xe394
//    test6502 (by Bird Computer) loaded at 0x8000 with entry point 0x8000
//
// (can use xxd -i to convert binary into C include syntax, as a starting point)
//
testprogramAddress=0x0000;

// we want to auto-clear the console if any output is sent by the program
var consoleboxStream="";

// demonstrate write hook
writeTriggers[0x000F]="consoleboxStream += String.fromCharCode(d);"+
                      "consolebox.innerHTML = consoleboxStream;";

// demonstrate read hook (not used by this test program)
readTriggers[0xD011]="((consolegetc==undefined)?0:0xff)";  // return zero until we have a char
readTriggers[0xD010]="var c=consolegetc; consolegetc=undefined; (c)";

testprogram = [
	0xA9, 0x00,              // LDA #$00
	0xAD, 0X12,0X34,         // LDA $1234
	0xa9, 0x01,              // LDA #$00
	0xa9, 0x02,              // LDA #$00
	0xa9, 0x03,              // LDA #$00
	0xa9, 0x04,              // LDA #$00
	0xa9, 0x05,              // LDA #$00
	0xa9, 0x06,              // LDA #$00
	0xa9, 0x07,              // LDA #$00
	0xa9, 0x08,              // LDA #$00
	0xa9, 0x09,              // LDA #$00
	0xa9, 0x0A,              // LDA #$00
	0xa9, 0x0B,              // LDA #$00
	0xa9, 0x0C,              // LDA #$00
	0xa9, 0x0D,              // LDA #$00
	0xa9, 0x0E,              // LDA #$00
	0xa9, 0x0F,              // LDA #$00
	0xa9, 0x10,              // LDA #$00
	0xa9, 0x20,              // LDA #$00
	0xa9, 0x21,              // LDA #$00
	0xa9, 0x22,              // LDA #$00
	0xa9, 0x23,              // LDA #$00
	0xa9, 0x24,              // LDA #$00
	0xa9, 0x25,              // LDA #$00
	0xa9, 0x26,              // LDA #$00
	0xa9, 0x27,              // LDA #$00
	0xa9, 0x28,              // LDA #$00
	0xa9, 0x29,              // LDA #$00
	0xa9, 0x2A,              // LDA #$00
	0xa9, 0x2B,              // LDA #$00
	0xa9, 0x2C,              // LDA #$00
	0xa9, 0x2D,              // LDA #$00
	0xa9, 0x2E,              // LDA #$00
	0xa9, 0x2F,              // LDA #$00

	0xa9, 0x30,              // LDA #$00
	0xa9, 0x31,              // LDA #$00
	0xa9, 0x32,              // LDA #$00
	0xa9, 0x33,              // LDA #$00
	0xa9, 0x34,              // LDA #$00
	0xa9, 0x35,              // LDA #$00
	0xa9, 0x36,              // LDA #$00
	0xa9, 0x37,              // LDA #$00
	0xa9, 0x38,              // LDA #$00
	0xa9, 0x39,              // LDA #$00
	0xa9, 0x3A,              // LDA #$00
	0xa9, 0x3B,              // LDA #$00
	0xa9, 0x3C,              // LDA #$00
	0xa9, 0x3D,              // LDA #$00
	0xa9, 0x3E,              // LDA #$00
	0xa9, 0x3F,              // LDA #$00

       	0xa9, 0x40,              // LDA #$00
	0xa9, 0x41,              // LDA #$00
	0xa9, 0x42,              // LDA #$00
	0xa9, 0x43,              // LDA #$00
	0xa9, 0x44,              // LDA #$00
	0xa9, 0x45,              // LDA #$00
	0xa9, 0x46,              // LDA #$00
	0xa9, 0x47,              // LDA #$00
	0xa9, 0x48,              // LDA #$00
	0xa9, 0x49,              // LDA #$00
	0xa9, 0x4A,              // LDA #$00
	0xa9, 0x4B,              // LDA #$00
	0xa9, 0x4C,              // LDA #$00
	0xa9, 0x4D,              // LDA #$00
	0xa9, 0x4E,              // LDA #$00
	0xa9, 0x4F,              // LDA #$00
	
	0xa9, 0x50,              // LDA #$00
	0xa9, 0x51,              // LDA #$00
	0xa9, 0x52,              // LDA #$00
	0xa9, 0x53,              // LDA #$00
	0xa9, 0x54,              // LDA #$00
	0xa9, 0x55,              // LDA #$00
	0xa9, 0x56,              // LDA #$00
	0xa9, 0x57,              // LDA #$00
	0xa9, 0x58,              // LDA #$00
	0xa9, 0x59,              // LDA #$00
	0xa9, 0x5A,              // LDA #$00
	0xa9, 0x5B,              // LDA #$00
	0xa9, 0x5C,              // LDA #$00
	0xa9, 0x5D,              // LDA #$00
	0xa9, 0x5E,              // LDA #$00
	0xa9, 0x5F,              // LDA #$00

       	0xa9, 0x60,              // LDA #$00
	0xa9, 0x61,              // LDA #$00
	0xa9, 0x62,              // LDA #$00
	0xa9, 0x63,              // LDA #$00
	0xa9, 0x64,              // LDA #$00
	0xa9, 0x65,              // LDA #$00
	0xa9, 0x66,              // LDA #$00
	0xa9, 0x67,              // LDA #$00
	0xa9, 0x68,              // LDA #$00
	0xa9, 0x69,              // LDA #$00
	0xa9, 0x6A,              // LDA #$00
	0xa9, 0x6B,              // LDA #$00
	0xa9, 0x6C,              // LDA #$00
	0xa9, 0x6D,              // LDA #$00
	0xa9, 0x6E,              // LDA #$00
	0xa9, 0x6F,              // LDA #$00

	0xa9, 0x70,              // LDA #$00
	0xa9, 0x71,              // LDA #$00
	0xa9, 0x72,              // LDA #$00
	0xa9, 0x73,              // LDA #$00
	0xa9, 0x74,              // LDA #$00
	0xa9, 0x75,              // LDA #$00
	0xa9, 0x76,              // LDA #$00
	0xa9, 0x77,              // LDA #$00
	0xa9, 0x78,              // LDA #$00
	0xa9, 0x79,              // LDA #$00
	0xa9, 0x7A,              // LDA #$00
	0xa9, 0x7B,              // LDA #$00
	0xa9, 0x7C,              // LDA #$00
	0xa9, 0x7D,              // LDA #$00
	0xa9, 0x7E,              // LDA #$00
	0xa9, 0x7F,              // LDA #$00
	
	0xa9, 0x80,              // LDA #$00
	0xa9, 0x81,              // LDA #$00
	0xa9, 0x82,              // LDA #$00
	0xa9, 0x83,              // LDA #$00
	0xa9, 0x84,              // LDA #$00
	0xa9, 0x85,              // LDA #$00
	0xa9, 0x86,              // LDA #$00
	0xa9, 0x87,              // LDA #$00
	0xa9, 0x88,              // LDA #$00
	0xa9, 0x89,              // LDA #$00
	0xa9, 0x8A,              // LDA #$00
	0xa9, 0x8B,              // LDA #$00
	0xa9, 0x8C,              // LDA #$00
	0xa9, 0x8D,              // LDA #$00
	0xa9, 0x8E,              // LDA #$00
	0xa9, 0x8F,              // LDA #$00
	
	0xa9, 0x90,              // LDA #$00
	0xa9, 0x91,              // LDA #$00
	0xa9, 0x92,              // LDA #$00
	0xa9, 0x93,              // LDA #$00
	0xa9, 0x94,              // LDA #$00
	0xa9, 0x95,              // LDA #$00
	0xa9, 0x96,              // LDA #$00
	0xa9, 0x97,              // LDA #$00
	0xa9, 0x98,              // LDA #$00
	0xa9, 0x99,              // LDA #$00
	0xa9, 0x9A,              // LDA #$00
	0xa9, 0x9B,              // LDA #$00
	0xa9, 0x9C,              // LDA #$00
	0xa9, 0x9D,              // LDA #$00
	0xa9, 0x9E,              // LDA #$00
	0xa9, 0x9F,              // LDA #$00

	0xa9, 0xA0,              // LDA #$00
	0xa9, 0xA1,              // LDA #$00
	0xa9, 0xA2,              // LDA #$00
	0xa9, 0xA3,              // LDA #$00
	0xa9, 0xA4,              // LDA #$00
	0xa9, 0xA5,              // LDA #$00
	0xa9, 0xA6,              // LDA #$00
	0xa9, 0xA7,              // LDA #$00
	0xa9, 0xA8,              // LDA #$00
	0xa9, 0xA9,              // LDA #$00
	0xa9, 0xAA,              // LDA #$00
	0xa9, 0xAB,              // LDA #$00
	0xa9, 0xAC,              // LDA #$00
	0xa9, 0xAD,              // LDA #$00
	0xa9, 0xAE,              // LDA #$00
	0xa9, 0xAF,              // LDA #$00
	
	0xa9, 0xB0,              // LDA #$00
	0xa9, 0xB1,              // LDA #$00
	0xa9, 0xB2,              // LDA #$00
	0xa9, 0xB3,              // LDA #$00
	0xa9, 0xB4,              // LDA #$00
	0xa9, 0xB5,              // LDA #$00
	0xa9, 0xB6,              // LDA #$00
	0xa9, 0xB7,              // LDA #$00
	0xa9, 0xB8,              // LDA #$00
	0xa9, 0xB9,              // LDA #$00
	0xa9, 0xBA,              // LDA #$00
	0xa9, 0xBB,              // LDA #$00
	0xa9, 0xBC,              // LDA #$00
	0xa9, 0xBD,              // LDA #$00
	0xa9, 0xBE,              // LDA #$00
	0xa9, 0xBF,              // LDA #$00

	0xa9, 0xC0,              // LDA #$00
	0xa9, 0xC1,              // LDA #$00
	0xa9, 0xC2,              // LDA #$00
	0xa9, 0xC3,              // LDA #$00
	0xa9, 0xC4,              // LDA #$00
	0xa9, 0xC5,              // LDA #$00
	0xa9, 0xC6,              // LDA #$00
	0xa9, 0xC7,              // LDA #$00
	0xa9, 0xC8,              // LDA #$00
	0xa9, 0xC9,              // LDA #$00
	0xa9, 0xCA,              // LDA #$00
	0xa9, 0xCB,              // LDA #$00
	0xa9, 0xCC,              // LDA #$00
	0xa9, 0xCD,              // LDA #$00
	0xa9, 0xCE,              // LDA #$00
	0xa9, 0xCF,              // LDA #$00
	
	0xa9, 0xD0,              // LDA #$00
	0xa9, 0xD1,              // LDA #$00
	0xa9, 0xD2,              // LDA #$00
	0xa9, 0xD3,              // LDA #$00
	0xa9, 0xD4,              // LDA #$00
	0xa9, 0xD5,              // LDA #$00
	0xa9, 0xD6,              // LDA #$00
	0xa9, 0xD7,              // LDA #$00
	0xa9, 0xD8,              // LDA #$00
	0xa9, 0xD9,              // LDA #$00
	0xa9, 0xDA,              // LDA #$00
	0xa9, 0xDB,              // LDA #$00
	0xa9, 0xDC,              // LDA #$00
	0xa9, 0xDD,              // LDA #$00
	0xa9, 0xDE,              // LDA #$00
	0xa9, 0xDF,              // LDA #$00

	0xa9, 0xE0,              // LDA #$00
	0xa9, 0xE1,              // LDA #$00
	0xa9, 0xE2,              // LDA #$00
	0xa9, 0xE3,              // LDA #$00
	0xa9, 0xE4,              // LDA #$00
	0xa9, 0xE5,              // LDA #$00
	0xa9, 0xE6,              // LDA #$00
	0xa9, 0xE7,              // LDA #$00
	0xa9, 0xE8,              // LDA #$00
	0xa9, 0xE9,              // LDA #$00
	0xa9, 0xEA,              // LDA #$00
	0xa9, 0xEB,              // LDA #$00
	0xa9, 0xEC,              // LDA #$00
	0xa9, 0xED,              // LDA #$00
	0xa9, 0xEE,              // LDA #$00
	0xa9, 0xEF,              // LDA #$00

	0xa9, 0xF0,              // LDA #$00
	0xa9, 0xF1,              // LDA #$00
	0xa9, 0xF2,              // LDA #$00
	0xa9, 0xF3,              // LDA #$00
	0xa9, 0xF4,              // LDA #$00
	0xa9, 0xF5,              // LDA #$00
	0xa9, 0xF6,              // LDA #$00
	0xa9, 0xF7,              // LDA #$00
	0xa9, 0xF8,              // LDA #$00
	0xa9, 0xF9,              // LDA #$00
	0xa9, 0xFA,              // LDA #$00
	0xa9, 0xFB,              // LDA #$00
	0xa9, 0xFC,              // LDA #$00
	0xa9, 0xFD,              // LDA #$00
	0xa9, 0xFE,              // LDA #$00
	0xa9, 0xFF               // LDA #$00
];
