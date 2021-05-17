<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function index() {
        $cursos = Curso::paginate();//Muestra en formato de paginas

        return view('cursos.index', compact('cursos')); //con compact se envian los datos a la vista se usa la variable sin el "$"
    }

    public function create() {
        return view('cursos.create');
    }

    public function show ($id) {
        //enviando variables
            //['a' => $b]

        //Para enviar variables manteniendo el mismo nombre
            //compact('curso'); ['curso' => $curso] 

        $curso = Curso::find($id);
        
        return view('cursos.show', compact('curso'));
    }
}
