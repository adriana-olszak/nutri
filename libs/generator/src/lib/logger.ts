import * as chalk from 'chalk';
import { Table } from 'console-table-printer';

export class Logger {
  static startTime: number;

  static start(message: string): void {
    console.log(chalk.cyan('\n' + '='.repeat(70)));
    console.log(chalk.cyan(message));
    console.log(chalk.cyan('='.repeat(70)));
    this.startTime = performance.now();
  }

  static end(message: string): void {
    const endTime = performance.now();
    const duration = ((endTime - this.startTime) / 1000).toFixed(2);
    console.log(chalk.green('\n' + '-'.repeat(70)));
    console.log(chalk.green(`${message} (${duration}s)`));
    console.log(chalk.green('-'.repeat(70) + '\n'));
  }

  static info(message: string): void {
    console.log(chalk.blue('ℹ'), message);
  }

  static success(message: string): void {
    console.log(chalk.green('✔'), message);
  }

  static warn(message: string): void {
    console.log(chalk.yellow('⚠'), message);
  }

  static error(message: string): void {
    console.log(chalk.red('✖'), message);
  }

  static table(data: any[], title?: string): void {
    if (title) {
      console.log(chalk.cyan(title));
    }
    const table = new Table({
      columns: Object.keys(data[0]).map(key => ({ name: key, alignment: 'left' })),
    });
    table.addRows(data);
    table.printTable();
  }
}
