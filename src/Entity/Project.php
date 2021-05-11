<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use App\Service\ArrayHelper;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass=ProjectRepository::class)
 */
class Project
{
    use TimestampableEntity;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $title;

    /**
     * @Gedmo\Slug(fields={"title"})
     * @ORM\Column(type="string", length=100, unique=true, nullable=true)
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=350, nullable=true)
     */
    private $description;

    /**
     * @ORM\OneToMany(targetEntity=ProjectImage::class, mappedBy="project", orphanRemoval=true))
     */
    private $projectImages;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="project")
     */
    private $users;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $author;

    public function __construct()
    {
        $this->projectImages = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getJsonResponse(ArrayHelper $arrayHelper): array
    {
        return [
            'id' => $this->getId(),
            'author' => $this->getAuthor(),
            'slug' => $this->getSlug(),
            'title' => $this->getTitle(),
            'description' => $this->getDescription(),
            'projectImages' => $arrayHelper->mapToArray($this->getProjectImages()),
            'users' => $arrayHelper->mapToArray($this->getUsers())
        ];
    }

    /**
     * @return Collection|ProjectImage[]
     */
    public function getProjectImages(): Collection
    {
        return $this->projectImages;
    }

    public function addProjectImage(ProjectImage $projectImage): self
    {
        if (!$this->projectImages->contains($projectImage)) {
            $this->projectImages[] = $projectImage;
            $projectImage->setProject($this);
        }

        return $this;
    }

    public function removeProjectImage(ProjectImage $projectImage): self
    {
        if ($this->projectImages->removeElement($projectImage)) {
            // set the owning side to null (unless already changed)
            if ($projectImage->getProject() === $this) {
                $projectImage->setProject(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addProject($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeProject($this);
        }

        return $this;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }
}
