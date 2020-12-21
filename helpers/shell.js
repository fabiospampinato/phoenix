
/* SHELL */

function shell ( command, callback = _.noop ) {

  const handler = identifier => callback ( identifier, task.output, task.error );

  const task = new Task ( SHELL_PATH, ['-ic', command], handler );

  return task;

}
