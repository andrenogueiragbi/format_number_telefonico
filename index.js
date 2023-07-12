
const ddd = require('./ddd.json')

function dddcheck(value) {

    for (let regiao in ddd) {
        for (let estado in ddd[regiao]) {


            for (let prefix of ddd[regiao][estado]) {
               
                if (prefix == value) {
                    return {
                        numberDDD: prefix,
                        estado,
                        regiao

                    }
                }

            }
        }

    }

    return null

}

cel =['60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '33']

tel = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']


function format(number) {
    number = number.replace(/\D+/gi, '').replace(/^0+/, '')

    if (number.length === 11) {

        const ddd_info = dddcheck(number.substring(0,2))

        return {
            error: false,
            value: number,
            type: 'celular',
            message_pt: 'numero celular está no formato correto',
            ddd_info
        }
    }

    if (number.length === 10 && cel.includes(number.substring(2,4))) {

        const ddd_info = dddcheck(number.substring(0,2))

        return {
            error: false,
            value: number.substring(0,2)+'9'+number.substring(2),
            type: 'celular',
            message_pt: 'numero celular foi adicionado o digito 9',
            ddd_info
        }

    }

    if (number.length === 10 && tel.includes(number.substring(2,4))) {

        const ddd_info = dddcheck(number.substring(0,2))

        return {
            error: false,
            value: number,
            type: 'fixo',
            message_pt: 'numero fixo está no formato correto',
            ddd_info
        }

    }


    return {
        error: true,
        value: number,
        type: undefined,
        message_pt: `numero não possivél identificar origem e formato, ${number.length} caracteres`,
        ddd_info:null
    }
}


console.log(format('65991436130'))


 
