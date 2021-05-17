<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    //Para que corra las migraciones:   php artisan migrate

    public function up()    //Crea la tabla
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); //Integer Unsigned Increment
            $table->string('name'); //Varchar, hasta max. 255 caracteres
            //$table->string('name', 100);
            //$table->text('name'); //Varchar para más de 255 caracteres
            $table->string('email')->unique();  //No permite repeticiones
            $table->timestamp('email_verified_at')->nullable(); //Guarda fechas, nullable permite que sea un campo vacio
            $table->string('password');
            $table->rememberToken();    //Varchar de tamaño 100, guarda la sesión
            $table->timestamps();   //Crea dos columnas que guarda fecha y hora
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');  //Elimina la tabla
    }
}
