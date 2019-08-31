exports.up = function(knex) {
  return knex.schema.createTable("transcripts", table => {
    table.increments("id").primary()
    table
      .integer("transcriptId")
      .unsigned()
      .references("id")
      .inTable("transcripts")
      .onDelete("SET NULL")
      .index()
    table.string("gc_text")
    table.jsonb("gc_response")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("transcripts")
}
