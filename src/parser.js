function genescan(input, opts) {
    const lines =
        input
            .split('\n')
            .filter(line => !line.startsWith('#'))
            .filter(line => line !== '')
            .map(line => line.trim())
            .map(line => _genescanLine(line, opts));

    return lines.join('\n');

}

function _genescanLine(line, { offset = 0, chr = 'chr22' }) {
    line = line.replace(/ \s*/g, '\t');
    const [, type, strand, startStr, endStr] = line.split('\t');
    const start = parseInt(startStr);
    const end = parseInt(endStr);
    line = [chr, 'genescan_gff', type, start + parseInt(offset), end + parseInt(offset), '.', strand, '.', 'fragment_0'].join('\t');
    return line;
}

function geneID(input, opts) {
    const lines =
        input
            .split('\n')
            .filter(line => !line.startsWith('#'))
            .filter(line => line !== '')
            .map(line => line.trim())
            .map(line => _geneIDLine(line, opts));

    return lines.join('\n');
}

function _geneIDLine(line, { offset = 0, chr = 'chr22' }) {
    const [, , type, startStr, endStr, , , , gene] = line.split('\t');
    const start = parseInt(startStr);
    const end = parseInt(endStr);
    line = [chr, 'gene_id_gff', type, start + parseInt(offset), end + parseInt(offset), '.', '+', '.', gene].join('\t');
    return line;
}

function fgenesh(input, opts) {
    const lines =
        input
            .split('\n')
            .filter(line => !line.startsWith('#'))
            .filter(line => line !== '')
            .map(line => line.trim())
            .map(line => _fgeneshLine(line, opts));

    return lines.join('\n');


}

function _fgeneshLine(line, { offset = 0, chr = 'chr22' }) {
    line = line.replace(/ \s*/g, '\t');
    const [geneNumber, strand, count, type, startStr, dash, endStr, score] = line.split('\t');
    const start = parseInt(startStr);
    const end = parseInt(endStr);
    line = [chr, 'fgenesh_gff', type, start + parseInt(offset), end + parseInt(offset), '.', '+', '.', `part_${geneNumber}`].join('\t');
    return line;
}

export default { genescan, geneID, fgenesh };