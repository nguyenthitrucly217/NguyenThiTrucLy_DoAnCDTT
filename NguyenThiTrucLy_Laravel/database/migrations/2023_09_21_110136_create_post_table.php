<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTable extends Migration
{
    /**
     * Run the migrations.
     *
     */
    public function up()
    {
        Schema::create('nttl_post', function (Blueprint $table) {
            $table->id();          
            $table->unsignedInteger('topic_id')->default(0);
            $table->string('title', 1000);
            $table->string('name', 1000);
            $table->string('slug', 1000);
            $table->string('image', 1000);
            $table->string('discription', 1000);
            $table->mediumtext('detail');
            $table->string('type', 1000);
            $table->string('metakey');
            $table->string('metadesc');
            $table->timestamps();//created_at, updated_at
            $table->unsignedInteger('created_by')->default(1);
            $table->unsignedInteger('updated_by')->nullable();
            $table->unsignedTinyInteger('status')->default(2);

        });
    }

    /**
     * Reverse the migrations.
     *
     */
    public function down()
    {
        Schema::dropIfExists('nttl_post');
    }
}
