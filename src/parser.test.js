import parser from './parser';
describe('parser', () => {
	describe('parseGenScan', () => {
		it('should parse the input properly', () => {
			const actual = parser.genescan(genescanInput, { offset: 0, chr: 'chr22' });
			expect(actual.split('\n').length).toEqual(19);
			expect(actual.split('\n')[0]).toEqual('chr22\tgenescan_gff\tInit\t162\t291\t.\t+\t.\tfragment_0');
		})
	});

	describe('parseGeneID', () => {
		it('should parse the input properly', () => {
			const actual = parser.geneID(geneIDInput, { offset: 0, chr: 'chr22' });
			expect(actual.split('\n')[0]).toEqual('chr22\tgene_id_gff\tFirst\t157\t286\t.\t+\t.\thuman_1');
		})
	});

	describe('parseFgenesh', () => {
		it('should parse the input properly', () => {
			const actual = parser.fgenesh(fgeneshInput, { offset: 0, chr: 'chr22' });
			expect(actual.split('\n')[0]).toEqual('chr22\tfgenesh_gff\tCDSf\t157\t286\t.\t+\t.\tpart_1');
		})
	});
})



const genescanInput = `
1.01 Init +    162    291  130  2  1  107   80   324 0.752  33.81

1.02 Intr +  10381  10463   83  2  2   94   92    26 0.829   2.96

1.03 Intr +  12805  12862   58  0  1   97   99    62 0.963   6.66

1.04 Intr +  14367  14452   86  1  2   47   95    49 0.678   1.04

1.05 Intr +  15133  15194   62  0  2   53   86    51 0.694  -1.07

1.06 Intr +  15531  15660  130  0  1   27   99   108 0.642   6.50

1.07 Intr +  16769  16833   65  1  2   78   83    73 0.995   3.32

1.08 Intr +  17230  17411  182  1  2   77   91   192 0.962  17.91

1.09 Intr +  23776  23870   95  2  2   37   94    55 0.688   0.68

1.10 Intr +  25050  25147   98  2  2   64   26   129 0.640   3.11

1.11 Intr +  26267  26286   20  2  2   91  100    -1 0.600  -2.35

1.12 Intr +  27301  27432  132  2  0   41  121   120 0.872  11.22

1.13 Intr +  27668  27856  189  0  0   51   67    92 0.625   2.96

1.14 Intr +  28013  28737  725  0  2   85   95   470 0.762  38.55

1.15 Intr +  30241  30385  145  0  1   71   48    71 0.368   1.26

1.16 Intr +  30594  30676   83  1  2   30   51    91 0.478  -1.04

1.17 Intr +  30785  30937  153  1  0  100  101   109 0.999  13.67

1.18 Intr +  31936  31999   64  0  1  114  131    52 0.996  10.39

1.19 Term +  33687  33880  194  1  2   52   55   187 0.999   9.38
`;


const geneIDInput = `
## gff-version 2
## date Mon May 11 12:37:45 2020
## source-version: geneid v 1.2 -- geneid@imim.es
# Sequence human - Length = 37571 bps
# Optimal Gene Structure. 2 genes. Score = 31.87 
# Gene 1 (Forward). 11 exons. 622 aa. Score = 31.58 
human	geneid_v1.2	First	157	286	 9.81	+	0	human_1
human	geneid_v1.2	Internal	10376	10458	 1.45	+	2	human_1
human	geneid_v1.2	Internal	12800	12857	 0.89	+	0	human_1
human	geneid_v1.2	Internal	15504	15655	-0.00	+	2	human_1
human	geneid_v1.2	Internal	16764	16828	 1.03	+	0	human_1
human	geneid_v1.2	Internal	17225	17406	 5.73	+	1	human_1
human	geneid_v1.2	Internal	23771	23865	-1.35	+	2	human_1
human	geneid_v1.2	Internal	25045	25142	 2.96	+	0	human_1
human	geneid_v1.2	Internal	26262	26281	 2.17	+	1	human_1
human	geneid_v1.2	Internal	27296	27427	 2.70	+	2	human_1
human	geneid_v1.2	Terminal	28008	28858	 6.20	+	2	human_1
# Gene 2 (Forward). 4 exons. 141 aa. Score = 0.28 
human	geneid_v1.2	First	30518	30529	-2.92	+	0	human_2
human	geneid_v1.2	Internal	30780	30932	 0.68	+	0	human_2
human	geneid_v1.2	Internal	31931	31994	 2.93	+	0	human_2
human	geneid_v1.2	Terminal	33682	33875	-0.40	+	2	human_2
`;

const fgeneshInput = `
1 +    1 CDSf       157 -       286   28.30       157 -       285    129
1 +    2 CDSi     10376 -     10458    7.43     10378 -     10458     81
1 +    3 CDSi     12800 -     12857    6.33     12800 -     12856     57
1 +    4 CDSi     14362 -     14447    3.34     14364 -     14447     84
1 +    5 CDSi     15128 -     15189    2.40     15128 -     15187     60
1 +    6 CDSi     15526 -     15655    6.39     15527 -     15655    129
1 +    7 CDSi     16764 -     16828    6.62     16764 -     16826     63
1 +    8 CDSi     17225 -     17406   12.24     17226 -     17405    180
1 +    9 CDSi     23771 -     23865    2.10     23773 -     23865     93
1 +   10 CDSi     25045 -     25142    0.60     25045 -     25140     96
1 +   11 CDSi     26262 -     26281   -1.21     26263 -     26280     18
1 +   12 CDSi     27296 -     27427    8.29     27298 -     27426    129
1 +   13 CDSi     28008 -     28732   33.29     28010 -     28732    723
1 +   14 CDSi     30780 -     30932    9.89     30780 -     30932    153
1 +   15 CDSi     31931 -     31994   13.04     31931 -     31993     63
1 +   16 CDSl     33682 -     33875    1.90     33684 -     33875    192
1 +      PolA     33923               -4.47
`;