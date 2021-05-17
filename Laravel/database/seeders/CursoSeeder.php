<?php

namespace Database\Seeders;

use App\Models\Curso;
use Illuminate\Database\Seeder;

class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
        $curso = new Curso();
        //propiedades
        $curso->name = "Laravel";
        $curso->description = "El mejor framework de PHP";
        $curso->categoria = "Desarrollo Web";

        $curso->save();

        $curso2 = new Curso();
        //propiedades
        $curso2->name = "Laravel";
        $curso2->description = "El mejor framework de PHP";
        $curso2->categoria = "Desarrollo Web";

        $curso2->save();

        $curso3 = new Curso();
        //propiedades
        $curso3->name = "Laravel";
        $curso3->description = "El mejor framework de PHP";
        $curso3->categoria = "Desarrollo Web";

        $curso3->save();
        */
        Curso::factory(50)->create();
    }
}
