<?php

namespace App\Entity;

use App\Repository\ProjectImageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProjectImageRepository::class)
 */
class ProjectImage
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="projectImages")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\OneToMany(targetEntity=Phase::class, mappedBy="projectImage", orphanRemoval=true)
     */
    private $phases;

    public function __construct()
    {
        $this->phases = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): self
    {
        $this->project = $project;

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

    /**
     * @return Collection|Phase[]
     */
    public function getPhases(): Collection
    {
        return $this->phases;
    }

    public function addPhase(Phase $phase): self
    {
        if (!$this->phases->contains($phase)) {
            $this->phases[] = $phase;
            $phase->setProjectImage($this);
        }

        return $this;
    }

    public function removePhase(Phase $phase): self
    {
        if ($this->phases->removeElement($phase)) {
            // set the owning side to null (unless already changed)
            if ($phase->getProjectImage() === $this) {
                $phase->setProjectImage(null);
            }
        }

        return $this;
    }
}
