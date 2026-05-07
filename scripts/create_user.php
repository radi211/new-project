<?php

require __DIR__ . '/../vendor/autoload.php';

$app = require __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$user = App\Models\User::updateOrCreate(
    ['email' => 'user@gmail.com'],
    [
        'name' => 'Demo User',
        'password' => Illuminate\Support\Facades\Hash::make('11111111'),
    ]
);

echo "User ready: {$user->email}" . PHP_EOL;
