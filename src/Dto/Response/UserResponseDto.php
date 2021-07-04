<?php

declare(strict_types=1);

namespace App\Dto\Response;

use JMS\Serializer\Annotation as Serialization;

class UserResponseDto
{
    /**
     * @var int $id
     * @Serialization\Type("int")
     */
    public $id;

    /**
     * @var string $email
     * @Serialization\Type("string")
     */
    public $email;

    /**
     * @var array $roles
     * @Serialization\Type("array<string>")
     */
    public $roles;

    /**
     * @var string $display
     * @Serialization\Type("string")
     */
    public $display;

    /**
     * @var string $organisation
     * @Serialization\Type("string")
     */
    public $organisation;

    /**
     * @var string $userColor
     * @Serialization\Type("string")
     */
    public $userColor;

    /**
     * @var boolean $authenticated
     * @Serialization\Type("boolean")
     */
    public $authenticated;
}
