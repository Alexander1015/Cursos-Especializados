<?php

use App\Http\Controllers\CursoController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeController::class);
//se declaraba antes:
    //Route::get('/', 'HomeController');

Route::get('cursos', [CursoController::class, 'index'])->name('cursos.index');
//se declaraba antes:
    //Route::get('/', 'HomeController@index');

Route::get('cursos/create', [CursoController::class, 'create'])->name('cursos.create');

Route::get('cursos/{id}', [CursoController::class, 'show'])->name('cursos.show');

/*
//Con la extensión "Laravel snippet" -> Route::get
Route::get('cursos/{curso}/{categoria?}', function ($curso, $categoria = null) {
    if($categoria)
    {
        return "Bienvenido al curso $curso, de la categoria $categoria";
    } else {
        return "Bienvenido al curso: $curso";
    }    
});
*/