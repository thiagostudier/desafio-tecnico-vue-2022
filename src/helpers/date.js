import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

/**
 * Formata uma data de acordo com a string passada
 * @param {Date} date Date obj da data a ser formatada
 * @param {String} formatStr String com o formato final da data
 * @param {Boolean} parse Se deve parsear o ISO antes de formatar
 * @returns {String}
 */
export const formatDate = (date, formatStr = 'dd/MM/yyyy', parse = false) => {
  if (parse) {
    return format(parseISO(date), formatStr, { locale: pt })
  }
  return format(date, formatStr, { locale: pt })
}
