<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'year' => rand(0,12) - date("Y"),
            'make' => $this->faker->lastName(),
            'model' => $this->faker->lastName(),
            'vin' => strtoupper(Str::random(17)),
        ];
    }
}
