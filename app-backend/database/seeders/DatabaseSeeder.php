<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Key;
use App\Models\Technician;
use App\Models\Vehicle;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        Key::factory()->count(20)
            ->has(Vehicle::factory()->count(rand(1,3)))
            ->create();

        Technician::factory()->count(20)->create();

        User::create([
            'name' => 'John Doe',
            'email' => 'johndoe@email.com',
            'password' => Hash::make('password')
        ]);

    }
}
