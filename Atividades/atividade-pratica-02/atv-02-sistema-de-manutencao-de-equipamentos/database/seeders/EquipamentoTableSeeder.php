<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Equipamento;

class EquipamentoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Equipamento::factory()->count(3)->create();
    }
}
