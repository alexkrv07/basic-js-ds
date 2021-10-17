const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {

  let head = l;
  let prev = null;
  let current = l;

  do {
    if (current.value === k) {
      if (!prev) {
        head = head.next;
        current = current.next;
      }
      else {
        prev.next = current.next;
        current = current.next;
      }
    } else {
      prev = current;
      current =  current.next;
    }
  } while(current);
  l = head;
  return head;



  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// ANDREI (@kryvetski-andrei) — Сегодня, в 0:46
// %a      Abbreviated weekday name
// %A      Full weekday name
// %b      Abbreviated month name
// %B      Full month name
// %c      Date and time representation appropriate for locale
// %d      Day of month as decimal number (01 – 31)
// %H      Hour in 24-hour format (00 – 23)
// %I      Hour in 12-hour format (01 – 12)
// %j      Day of year as decimal number (001 – 366)
// %m      Month as decimal number (01 – 12)
// %M      Minute as decimal number (00 – 59)
// %p      Current locale's A.M./P.M. indicator for 12-hour clock
// %S      Second as decimal number (00 – 59)
// %U      Week of year as decimal number, with Sunday as first day of week (00 – 53)
// %w      Weekday as decimal number (0 – 6; Sunday is 0)
// %W      Week of year as decimal number, with Monday as first day of week (00 – 53)
// %x      Date representation for current locale
// %X      Time representation for current locale
// %y      Year without century, as decimal number (00 – 99)
// %Y      Year with century, as decimal number
// %z, %Z  Either the time-zone name or time zone abbreviation, depending on registry settings
// %%      Percent sign

// git commit -m "init: start CodeJam CSSMemSlider-task (`date +'%a, %b %d, %Y  %I:%M:%S %p'`)"
// git commit -m "init: start CodeJam CSSMemSlider-task `date +'%Y-%m-%d %H:%M:%S'`"

// git commit -m "feat: add basic color (`date +'%a, %b %d, %Y  %I:%M:%S %p'`)"
// git commit -m "feat: add 4th mem (`date +'%a, %b %d, %Y  %I:%M:%S %p'`)"
